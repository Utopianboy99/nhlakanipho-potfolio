"use client"

import React from "react"
import { Box, Grid, Typography, IconButton, Menu, MenuItem } from "@mui/material"
import styles from "./about.module.css"
// import Link from "next/link"
// import { Icon } from '@iconify/react';


const About = () =>{
    return(
        <Box className={styles.About}>
            <Grid className={styles.text}>
                <h1 className={styles.h1}>ABOUT</h1>
                <span className={styles.email}>madnhlaka@gmail.com</span>
                <Typography className={styles.info}>
                    I am a Junior Graphic designer and Developer, I'd say I'm more of a Front-end Developer.
                    I have experience of six months for both careers. I can impement effective strategies at a local level. 
                    I'm a very flexible guy that has time running in his veins.
                    My biggest stength is creative problem solving as I find creative ways to deal and overcome problems and 
                    different situations that the corperate may encounter.
                </Typography>

            </Grid>
            <Grid className={styles.image}> 
                <img src="1000001421[1] 1profile (1).png" alt="" className={styles.img} />
            </Grid>
        </Box>
    )
}

export default About