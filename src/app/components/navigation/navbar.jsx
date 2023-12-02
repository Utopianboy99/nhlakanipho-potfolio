"use client"
import React, {useState} from "react"
import styles from "@/app/components/navigation/navbar.module.css"
import { Box, Grid, Typography, IconButton, Menu, MenuItem } from "@mui/material"
// import ModeNightIcon from '@mui/icons-material/ModeNight'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Link from "next/link";
import About from "../About/about";


const Navbar = () => {


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box className={styles.nav}>
            <Grid className={styles.options}>
                <Typography>Home</Typography>
                <Typography>About me</Typography>
                <Typography>Resume</Typography>
                <Typography>Portfolio</Typography>
            </Grid>
            <Grid className={styles.options2}>
                <IconButton onClick={handleClick}>
                    <MenuRoundedIcon className={styles.dropbut} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Contact Info</MenuItem>
                    <MenuItem onClick={handleClose}>Gallery</MenuItem>
                    <MenuItem onClick={handleClose}>Option 3</MenuItem>
                </Menu>
            </Grid>
        </Box>
    )
}

export default Navbar