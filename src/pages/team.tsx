import React from "react";
import { ReactElement } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import image1 from '../assests/4371.jpg';
import { Footer } from "../components/footer";

export const Team = (): ReactElement => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <div className={classes.header}>
                        TEAM
                    </div>
                    <div className={classes.imgdiv}>
                        <img src={image1} alt="img" className={classes.img} />
                    </div>
                    <div className={classes.header}>
                        BabyBoy Ample
                    </div>
                    <div className={classes.bodytxt}>
                        - Over 20 years of leading IT, Finance, and Global Energy projects.
                    </div>
                    <div className={classes.bodytxt}>
                        - In the cryptoverse since 2017 and NFT’s since 2020
                    </div>
                    <div className={classes.bodytxt}>
                        - Passionate about educating the masses about Crypto and NFT’s. Community builder.
                    </div>
                </Grid>
            </Grid>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        color: '#fee900',
        fontSize: '30px',
        textAlign: 'center',
        fontWeight: '300',
        height: '35px',
        [theme.breakpoints.down(900)]: {
            fontSize: '25px',
            paddingBottom: '10px',
            marginInlineStart: '10px'
        }
    },
    footer:{
        width: '90%',
    },
    imgdiv: {
        width: '100%',
        textAlign: 'center',
        margin: '20px 0px 20px 0px'
    },
    img: {
        width: '40%',
        maxWidth: '350px',
        maxHeight: '350px',
        objectFit: 'cover',
        borderRadius: "50%",
        [theme.breakpoints.down(900)]: {
            width: '75%',
            marginLeft: '10px'
        }
    },
    bodytxt: {
        paddingTop: '5px',
        color: '#ffffff',
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: '300',
        height: '35px',
        [theme.breakpoints.down(900)]: {
            fontSize: '25px',
            paddingTop: '25px',
            padding: '15px',
        }
    }
}))