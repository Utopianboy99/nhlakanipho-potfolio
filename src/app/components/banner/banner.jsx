"use client"

import React from "react"
import { Box, Grid, Typography, IconButton, Menu, MenuItem } from "@mui/material"
import styles from "./banner.module.css"
import Link from "next/link"
import { Icon } from '@iconify/react';


const Banner = () =>{
    return(
        <Box className={styles.Banner}>
            <Grid className={styles.intro}>
                <Typography className={styles.me}>
                    Nhlakanipho <br /> Madlanga
                </Typography>
                <Typography className={styles.what}>
                    Junior Graphic designer/ Front-End Developer
                </Typography>
            </Grid>
            <Grid className={styles.socials}>
                <Link href="https://www.instagram.com/_thatshim/">
                    <Icon icon="skill-icons:instagram" />
                </Link>
                <Link href="https://www.threads.net/@_thatshim">
                <Icon icon="bi:threads-fill" color="white" />
                </Link>
                <Link href="https://twitter.com/madnhlaka">
                <Icon icon="skill-icons:twitter" color="black" />
                </Link>
                <Link href="">
                <Icon icon="logos:whatsapp-icon" color="black" />
                </Link>
            </Grid>
        </Box>
    )
}

export default Banner;