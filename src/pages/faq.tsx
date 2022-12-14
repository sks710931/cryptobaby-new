import React, { ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Footer } from "../components/footer";

export const Faq = (): ReactElement => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <div className={classes.header}>FAQ</div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                sx={{ backgroundColor: "black" }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h4"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    What are NFTs?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    NFT stands for Non-Fungible Token. Fungibility is whether or
                    not something can be replicated. NFTs are completely unique
                    and non-interchangeable, which is what makes them
                    non-fungible!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                sx={{ backgroundColor: "black" }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h4"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    WHAT IS CryptoBaby NFT's?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    CryptoBaby’s is a collection of 2,100 NFT’s based on
                    Bitcoin’s total supply of 21 million. We are going to have
                    fun while educating new users of NFT’s and Crypto
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                sx={{ backgroundColor: "black" }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h4"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    What is the purpose of Cryptobaby?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    We will build a community of people who want to onboard the
                    next million users of NFT’s and Crypto. We will tell the
                    story of Bitcoin, Ethereum, and decentralized finance.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                sx={{ backgroundColor: "black" }}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h4"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    Is there a pre-sale?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                  There is no pre-sale. Mint at cryptobaby.cash or buy at opensea.io/collection/cbaby
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                sx={{ backgroundColor: "black" }}
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h4"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    How many CryptoBaby’s can I mint?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    5 per wallet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                sx={{ backgroundColor: "black" }}
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h4"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                   How much do CryptoBaby NFT’s cost?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                    They are free to mint.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className={classes.faq}>
            <div className={classes.txt}>
              <Accordion
                sx={{ backgroundColor: "black" }}
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    color="common.white"
                    variant="h4"
                    sx={{ width: "70%", flexShrink: 0 }}
                  >
                    What will CryptoBaby NFT’s give back?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="common.white" variant="h5">
                  We will give 10% of future revenue to kids nonprofits
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          
        </Grid>
      </Grid>
      <div className={classes.footer}>
        <Footer />
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: "#fee900",
    fontSize: "30px",
    textAlign: "center",
    [theme.breakpoints.down(900)]: {
      fontSize: "25px",
      paddingBottom: "10px",
    },
  },
  faq: {
    margin: "25px auto 25px auto",
    backgroundColor: "#fc4e57",
    width: "70%",
    [theme.breakpoints.down(900)]: {
      width: "90%",
      marginLeft: "7%",
      paddingBottom: "10px",
    },
  },
  txt: {
    color: "#ffffff",
    fontSize: "30px",
    fontFamily: "Vcr",
    padding: "4px 4px 4px 4px",
  },
  footer: {
    position: "relative",
    width: "90%",
  },
}));
