/* eslint-disable react-hooks/exhaustive-deps */
import { makeStyles } from "@mui/styles";
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  Slide,
  Theme,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactElement } from "react";
import image2 from "../assests/3192.png";
import image3 from "../assests/3380.png";
import image4 from "../assests/4266.png";
import image5 from "../assests/3417.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WETHAbi from "../abis/WETH.json";
import NFTAbi from "../abis/NFT.json";
import { Footer } from "../components/footer";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { NFTContract, rpc, WETH } from "../config/contract";
import { formatEther, formatUnits, parseUnits } from "@ethersproject/units";
import { toast } from "react-toastify";
import slide from "../assests/slide.gif";
import { JsonRpcProvider } from "@ethersproject/providers";
import {
  getOrCreateInviteCode,
  logVisit,
  saveAddress,
  storeReferrer,
} from "@sharemint/sdk";
import { ContentCopy } from "@mui/icons-material";

const SlideImage = styled.img`
  height: 65vh;
  object-fit: cover;
  @media only screen and (max-width: 900px) {
    height: 50vh;
  }
`;

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const slides = [
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
];

export const Home = (): ReactElement => {
  const classes = useStyles();
  const [mints, setMints] = useState(1);
  const [code, setCode] = useState();
  const { library, account } = useWeb3React();
  const [totalMints, setTotalMints] = useState(0);

  useEffect(() => {
    logVisit({ slug: "cryptobaby" });
    storeReferrer();
  }, []);

  useEffect(() => {
    console.log("hit", account);
    if (account && account !== "") {
      getInviteCode();
      saveAddress({ slug: "cryptobaby", address: account! });
    }
  }, [account]);
  const getInviteCode = async () => {
    const code = await getOrCreateInviteCode({ address: account! });
    setCode(code.code);
  };
  const mintNFT = async () => {
    try {
      const signer = await library.getSigner();
      const NFT = new Contract(NFTContract, NFTAbi, signer);
      const result = await NFT.mint(mints);
      await result.wait();
      saveAddress({ slug: "cryptobaby", transactionHash: result.hash });
      console.log(result);
      await getTotalMinted();
      toast.success(`Successfully minted ${mints} CBaby NFTs`);
    } catch (err: any) {
      if (err.data && err.data.message) {
        toast.error(err.data.message);
      } else {
        toast.error(err.message);
      }
    }
  };
  const handleMint = async () => {
    if (library && account) {
      await mintNFT();
    } else {
      toast.error("Please connect your wallet!");
    }
  };
  const getTotalMinted = async () => {
    try {
      const provider = new JsonRpcProvider(rpc);
      const NFT = new Contract(NFTContract, NFTAbi, provider);
      NFT.on("CreateCryptoBabyNFT", async () => {
        const mint2 = await NFT.totalSupply();
        setTotalMints(Number(formatUnits(mint2, 0)));
      });
      const totalMint = await NFT.totalSupply();
      setTotalMints(Number(formatUnits(totalMint, 0)));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getTotalMinted();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <div className={classes.main}>
            Welcome to CryptoBaby-- The cutest baby's on the blockchain!
            <br />
            <Button
              onClick={() => {
                window.open("audit.pdf", "_blank");
                return false;
              }}
              sx={{ mt: 3 }}
              variant="contained"
            >
              View Audit Report
            </Button>
            <div className={classes.mintBox}>
              <Typography variant="h4" color="primary">
                Minted {totalMints}/2100
              </Typography>
              <Typography variant="caption" color="primary">
                Free NFT's
              </Typography>
              <Typography variant="caption" color="primary">
                5 per wallet
              </Typography>
              <div className={classes.mintInput}>
                <Select
                  color="primary"
                  className={classes.select}
                  id="demo-simple-select"
                  value={mints}
                  onChange={(e) => {
                    setMints(e.target.value as number);
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>{" "}
                <Button
                  className={classes.mintBtn}
                  variant="contained"
                  onClick={handleMint}
                >
                  Mint
                </Button>
              </div>
              {code && code !== "" && (
                <div>
                  <br />
                  {/* <Typography
                    sx={{
                      color: "#fee600",
                      display: "flex",
                      alignItems: "center",
                      marginRight: 8,
                    }}
                  >
                    Referal Link: {`https://cryptobaby.cash/?r=${code}`}{" "}
                    <Tooltip color="#fc4e57" title="Copy referral link">
                      <IconButton
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `https://cryptobaby.cash/?r=${code}`
                          );
                          toast.success("Referral link copied!");
                        }}
                      >
                        <ContentCopy fontSize="small" htmlColor="#fc4e57" />
                      </IconButton>
                    </Tooltip>
                  </Typography> */}
                </div>
              )}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <StyledSlider>
            <SlideImage src={slide} alt="baby slide" />
          </StyledSlider>
        </Grid>
      </Grid>
      <div className={classes.footer}>
        <Footer />
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    color: "#ffffff",
    fontSize: "35px",
    textAlign: "center",
    padding: "15% 0",
    width: "90%",
    [theme.breakpoints.down(900)]: {
      width: "100%",
      padding: "18% 0",
    },
  },
  footer: {
    width: "90%",
  },
  mintInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  select: {
    marginRight: 15,
    width: 100,
    color: "yellow",
    backgroundColor: "white",
  },
  arrow: {
    color: "#ffffff",
    fontSize: "35px",
    padding: "10px",
    [theme.breakpoints.down(900)]: {
      fontSize: "25px",
    },
  },
  mintBox: {
    display: "flex",
    justifyContent: "flex-start !important",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: 50,
    padding: 20,
    "& span": {
      fontSize: 20,
      color: theme.palette.common.white,
    },
  },
  mintBtn: {
    height: 55,
    width: 100,
    marginRight: "10px !important",
  },
  mintText: {},
}));
