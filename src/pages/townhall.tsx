import { makeStyles } from "@mui/styles";
import { ReactElement } from "react";
import { Theme } from "@mui/material";

import image from "../assests/townhallgirl.png";

import Grid from "@mui/material/Grid";
import { Footer } from "../components/footer";

export const Townhall = (): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.top}>
      <div className={classes.header}>About CBABY</div>
      <Grid container>
        <Grid xs={12} md={12} lg={8} xl={8} style={{ zIndex: "2" }}>
          <div className={classes.txtdiv}>
            <div className={classes.text}>
              CryptoBaby’s ($CBABY) is a free to mint NFT collection where the
              goal is to educate people on Cryptocurrency and NFT’s. Many people
              are interested in Crypto and NFT’s, but don’t have the knowledge
              to participate safely. This NFT community will foster education of
              Crypto and NFT’s through fun! There will be an arc built with
              utility for members. The community will drive the project.
            </div>
            <div className={classes.text}>
              The Crypto space has drifted a long way from the original goals of
              Satoshi Nakamoto’s Bitcoin whitepaper. The goal of this project is
              to return to those ideals and have fun! We will tell the story of
              Bitcoin, Ethereum, and decentralized finance.
            </div>
            <div className={classes.text}>
              CryptoBaby has 2,100 NFT’s in the genesis collection. This is
              based on 1/10,000 of Bitcoin’s supply. Holding one of the original
              CBABY will act as mint pass to future drops. We will partner with
              Metaverses in providing educational content to our users. The
              community will be active in shaping the roadmap.
            </div>
            <img className={classes.mobileImg} src={image} alt=" banner" />
          </div>
        </Grid>
        <Grid xs={12} md={12} lg={4} xl={4}>
          <div className={classes.imgdiv}>
            <img src={image} alt="img" className={classes.img} />
          </div>
        </Grid>
      </Grid>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  top: {
    marginTop: "-3%",
  },
  header: {
    color: "#fee900",
    fontSize: "30px",
    textAlign: "center",
    fontWeight: "300",
    height: "35px",
    [theme.breakpoints.down(900)]: {
      fontSize: "25px",
      paddingBottom: "10px",
      marginInlineStart: "10px",
    },
  },
  txtdiv: {
    paddingTop: "40px",
    [theme.breakpoints.down(900)]: {
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
  text: {
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "350",
    marginTop: "20px",
    marginBottom: "30px",
    letterSpacing: "5px",
    wordSpacing: "6px",
    lineHeight: "28px",
    [theme.breakpoints.down(900)]: {
      letterSpacing: "3px",
    },
  },
  imgdiv: {
    zIndex: "-10",
    
    [theme.breakpoints.down(1199)]: {
      display: "none",
    },
  },
  img: {
    width: "auto",
    maxHeight: "calc(100vh - 207px)",
    position: "fixed",
    right: 0,
    bottom: 0,
    [theme.breakpoints.down(1499)]: {
      maxHeight: "calc(100vh - 165px)",
    },
    [theme.breakpoints.down(1199)]: {
      position: "absolute",
      top: 170,
    },
  },
  footer: {
    width: "90%",
  },
  mobileImg:{
    display: "none",
    [theme.breakpoints.down(1499)]:{
      display: "flex !important",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }
  }
}));
