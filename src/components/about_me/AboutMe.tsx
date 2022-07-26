// @ts-nocheck
import { Box, Typography, Grid } from "@mui/material";
import HtmlTag from "../common/HtmlTag";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import "./styles.css";
import {useState} from 'react'
import LightSpeed from "react-reveal/LightSpeed";
import TypeAnimation from "react-type-animation";

export default function AboutMe() {
  const [copied, setCopied] = useState(false)
  return (
    <LightSpeed left>
      <Box textAlign="right" mr={15} mt={6} id="aboutme">
        <HtmlTag text="<h1>" />
        <Typography
          align="right"
          variant="h3"
          style={{ color: "#4EC9B0", fontFamily: "IBM Plex Sans, sans-serif" }}
        >
          About Me
        </Typography>
        <HtmlTag text="</h1>" />
      </Box>
      <Box ml={15} mt={2}>
        <Typography
          variant="h4"
          style={{
            color: "#4EC9B0",
            fontFamily: "Ubuntu Mono",
            fontWeight: "lighter",
          }}
        >
          <TypeAnimation
            cursor={true}
            sequence={[" Hi, I’m Jasmeen . . .", 500, "I'm a student", 
            500, "I'm a full stack developer", 500]}
            wrapper="p"
            repeat={Infinity}
          />
        </Typography>
        <Box style={{ width: "70vw" }} mb={8}>
          <p
            style={{
              color: "white",
              fontFamily: "Ubuntu Mono",
              fontSize: "20px",
            }}
          >
            I am a 3rd year computer science student at the University of
            Toronto. I moved from Surrey, BC to Toronto, ON in 2019 for school
            and new adventures! Here are some things that I really like ..
          </p>
        </Box>
        <Grid container>
          <Grid xs={2}>
            <Box textAlign="center">
              <img src="read.png" alt="" />
              <p style={{ color: "#369CED", fontFamily: "Ubuntu Mono" }}>
                Reading
              </p>
            </Box>
          </Grid>
          <Grid xs={2}>
            <Box textAlign="center">
              <img src="sewing.png" alt="" />
              <p style={{ color: "#369CED", fontFamily: "Ubuntu Mono" }}>
                Sewing
              </p>
            </Box>
          </Grid>
          <Grid xs={2}>
            <Box textAlign="center">
              <img src="rain.png" alt="" />
              <p style={{ color: "#369CED", fontFamily: "Ubuntu Mono" }}>
                Rainy Days
              </p>
            </Box>
          </Grid>
          <Grid xs={2}>
            <Box textAlign="center">
              <img src="code.png" alt="" />
              <p style={{ color: "#369CED", fontFamily: "Ubuntu Mono" }}>
                Coding
              </p>
            </Box>
          </Grid>
          <Grid xs={2}>
            <Box textAlign="center">
              <img src="plant.png" alt="" />
              <p style={{ color: "#369CED", fontFamily: "Ubuntu Mono" }}>
                Plants
              </p>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          style={{
            color: "#4EC9B0",
            fontFamily: "Ubuntu Mono",
            fontWeight: "lighter",
            textAlign: "center",
          }}
          mt={5}
        >
          Contact Me
        </Typography>
        <Box textAlign="center" mt={2} id="contact">
        <p style={{fontFamily: "Ubuntu Mono", color: "#4EC9B0", fontSize: '12px'}}>{copied ? "My email has been copied to your clipboard!" : ""}</p>

          <button className="icon-button" onClick={()=> 
            // eslint-disable-next-line no-restricted-globals
            location.href="https://ca.linkedin.com/in/jasmeen-sran-2a2144224?original_referer=https%3A%2F%2Fwww.google.com%2F"}>
            <IconContext.Provider value={{ color: "f0e6f7", size: "2em" }}>
              <FaLinkedin />
            </IconContext.Provider>
          </button>
          <button className="icon-button" onClick={()=>
          // eslint-disable-next-line no-restricted-globals
          location.href="https://github.com/jasmeensrans"
          }>
            <IconContext.Provider value={{ color: "f0e6f7", size: "2em" }}>
              <AiFillGithub />
            </IconContext.Provider>
          </button>
          <button className="icon-button" onClick={()=> {
            setCopied(true)
            navigator.clipboard.writeText("jasmeensran@hotmail.co.uk").then(()=> {console.log('copied')})
          }}>
            <IconContext.Provider value={{ color: "f0e6f7", size: "2em" }}>
              <AiOutlineMail />
            </IconContext.Provider>
            </button>
        </Box>
      </Box>
    </LightSpeed>
  );
}
