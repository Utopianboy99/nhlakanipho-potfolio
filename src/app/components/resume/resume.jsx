"use client"
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./resume.module.css";
import Link from "next/link";
import { Icon } from '@iconify/react';

const Resume = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        const interval1 = setInterval(() => {
            if (counter1 === 65) {
                clearInterval(interval1);
            } else {
                setCounter1((prevCounter) => prevCounter + 1);
            }
        }, 9.9);

        const interval2 = setInterval(() => {
            if (counter2 === 50) {
                clearInterval(interval2);
            } else {
                setCounter2((prevCounter) => prevCounter + 1);
            }
        }, 8);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, [counter1, counter2]);

    return (
        <Box className={styles.resume}>
            <Grid className={styles.main1}>
                <Typography className={styles.bigtext} >Skills</Typography>
                <Typography className={styles.figma}>Figma</Typography>
                <Grid className={styles.skill}>
                    <Grid className={styles.outer}>
                        <Grid className={styles.inner}>
                            <Grid className={styles.number}>{counter1}%</Grid>
                        </Grid>
                    </Grid>

                    <svg
                        className={styles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100px"
                        height="100px"
                    >
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#e91e63" />
                                <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle
                            cx="50"
                            cy="50"
                            r="38.9"
                            strokeLinecap="round"
                            className={styles.circle}
                            style={{
                                strokeDasharray: 246,
                                strokeDashoffset: 246,
                            }}
                        />
                    </svg>
                </Grid>

                <Typography className={styles.secondSkill}>Photoshop</Typography>
                <Grid className={styles.skill}>
                    <Grid className={styles.outer}>
                        <Grid className={styles.inner}>
                            <Grid className={styles.number}>{counter2}%</Grid>
                        </Grid>
                    </Grid>

                    <svg
                        className={styles.svg}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100px"
                        height="100px"
                    >
                        <defs>
                            <linearGradient id="GradientColor2">
                                <stop offset="0%" stop-color="#2196f3" />
                                <stop offset="100%" stop-color="#4caf50" />
                            </linearGradient>
                        </defs>
                        <circle
                            cx="50"
                            cy="50"
                            r="38.9"
                            strokeLinecap="round"
                            className={styles.circle}
                            style={{
                                strokeDasharray: 210,
                                strokeDashoffset: 210,
                            }}
                        />
                    </svg>
                </Grid>

                <Typography className={styles.lang}>Languages</Typography>
                <Grid className={styles.container}>
                    <Grid className={styles.skills2}>
                        <Typography className={styles.langtype}>English</Typography>
                        <Grid className={styles.progressBar}>
                            <Grid className={styles.eng}> <span className={styles.percent}>86%</span></Grid>
                        </Grid>
                        <Typography className={styles.langtype}> IsiXhosa</Typography>
                        <Grid className={styles.progressBar}>
                            <Grid className={styles.xhosa}> <span className={styles.percent}>90%</span></Grid>
                        </Grid>
                        <Typography className={styles.langtype}>IsiZulu</Typography>
                        <Grid className={styles.progressBar}>
                            <Grid className={styles.zulu}> <span className={styles.percent}>90%</span></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={styles.main2}>
                <Typography className={styles.personalskill}>Personal skills</Typography>
                <Typography className={styles.eplainskill}>Creative problem solving, Team work, strategic thinking</Typography>
                <Typography className={styles.edu}>
                    Education 
                    <br />  
                    <span className={styles.smalledu}> Forest High School (Matric) </span>

                </Typography>
                <Typography className={styles.cert}>
                            Certifications
                </Typography>
                <Link className={styles.link} href="https://www.freecodecamp.org/certification/nhlakanipho-madlanga/responsive-web-design">Freecodecamp responsive web design</Link>
                <br />
                <Link className={styles.link} href="https://www.coursera.org/account/accomplishments/verify/Q6EY7FNZBNEX">Fundimentals of Graphic Design</Link>
            </Grid>
            <Grid className={styles.main3}>
                <Typography className={styles.dskills}>
                    Design Skills
                </Typography>
                <Typography className={styles.dskilltext}>
                            Creative planning & strategic,
                            <br />
                            Signs & typography, layout
                            <br />
                            Grid, color scheme, imagination
                </Typography>

                <Typography className={styles.hobbie}>
                    Hobbies & Interests
                </Typography>
                <Icon className={styles.iconss} icon="bi:playstation" color="white" />
                <Typography className={styles.icontext}> Gaming</Typography>
                <br />
                <Icon className={styles.iconss} icon="map:skateboarding" color="white" />
                <Typography className={styles.icontext}> Skating</Typography>
                <br />
                <Icon className={styles.iconss} icon="mdi:art" color="white" />
                <Typography className={styles.icontext}> Eating</Typography>
            </Grid>
        </Box>
    );
};

export default Resume;
