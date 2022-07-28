import { Box, Grid, Typography } from "@mui/material";
import HtmlTag from "../common/HtmlTag";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaMicrosoft,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiCsharp, SiJavascript, SiRedux } from "react-icons/si";
import { IconContext } from "react-icons";
import ProjectCard from "./ProjectCard";
// @ts-ignore
import LightSpeed from "react-reveal/LightSpeed";
import TypeAnimation from "react-type-animation";

export default function Skills() {
  return (
    <Box id="skills">
      <Box textAlign="right" mr={15}>
        <HtmlTag text="<h1>" />
        <Typography
          align="right"
          variant="h3"
          style={{
            color: "#4EC9B0",
            fontFamily: "IBM Plex Sans, sans-serif",
          }}
        >
          SKILLS
        </Typography>
        <HtmlTag text="</h1>" />
      </Box>
      <LightSpeed left>
        <Box ml={15}>
          <Typography
            variant="h4"
            style={{
              color: "#4EC9B0",
              fontFamily: "Ubuntu Mono",
              fontWeight: "bold",
            }}
          >
            My Toolbox
          </Typography>
          <p style={{ fontFamily: "Ubuntu Mono", color: "white" }}>
            <TypeAnimation
              cursor={true}
              sequence={[" The technologies I am proficient in.", 1000, " "]}
              wrapper="p"
              repeat={Infinity}
            />
          </p>
          <Box ml={5}>
            <HtmlTag text="<section>" />
            <Grid container xs={11} mt={2} ml={5}>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <FaPython />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    Python
                  </p>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <FaJava />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    Java
                  </p>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <SiCsharp />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    C#
                  </p>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <SiJavascript />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    Javascipt
                  </p>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <FaReact />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    React
                  </p>
                </Box>
              </Grid>
            </Grid>
            <Grid container xs={11} mt={2} ml={5}>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <SiRedux />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    Redux
                  </p>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <FaNodeJs />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    Node Js
                  </p>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <FaMicrosoft />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    .NET CORE
                  </p>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <FaCss3Alt />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    CSS
                  </p>
                </Box>
              </Grid>
              <Grid xs={2}>
                <Box style={{ textAlign: "center" }}>
                  <IconContext.Provider
                    value={{ color: "369CED", size: "5em" }}
                  >
                    <FaHtml5 />
                  </IconContext.Provider>
                  <p style={{ fontFamily: "Ubuntu Mono", color: "#369CED" }}>
                    HTML
                  </p>
                </Box>
              </Grid>
            </Grid>
            <HtmlTag text="</section>" />
          </Box>
          <Typography
            variant="h4"
            mt={3}
            style={{
              color: "#4EC9B0",
              fontFamily: "Ubuntu Mono",
              fontWeight: "bold",
            }}
          >
            Some things I’ve created
          </Typography>
          <p style={{ fontFamily: "Ubuntu Mono", color: "white" }}>
            <TypeAnimation
              cursor={true}
              sequence={[
                "Projects that I have worked on using technologies I know.",
                1000,
                " ",
              ]}
              wrapper="p"
              repeat={Infinity}
            />
          </p>
          <ProjectCard
            title="Airline Reservation System"
            info="Airline Reservation system is a project written in Java. This program allows users to create and book airline reservations as well as message other users. Admin users can create flight bookings and message flight passengers. This program was created using Clean Architecture Principles"
            pic="plane.jpg"
            align="left"
          />
          <ProjectCard
            title="Portfolio Website"
            info="You are here right now! This website was created using React JS along with the Material UI styling library and some custom CSS. Some animation websites like react-spring were also used"
            pic="animated.jpg"
            align="right"
          />
        </Box>
      </LightSpeed>
    </Box>
  );
}
