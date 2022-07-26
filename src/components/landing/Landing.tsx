import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../common/CustomButton";
import HtmlTag from "../common/HtmlTag";
import "./styles.css";
import { config, useSpring, animated } from "react-spring";
import TypeAnimation from "react-type-animation";

export default function Landing() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 600,
    config: config.molasses,
  });
  return (
    <Box ml={20} mt={5} mb={5}>
      <Grid container>
        <Grid xs={7}>
          <HtmlTag text="<h1>" />
          <Typography
            ml={2}
            variant="h1"
            style={{ fontFamily: "IBM Plex Sans, sans-serif", color: "white" }}
          >
            <animated.text style={props}>Jasmeen Sran</animated.text>
          </Typography>

          <HtmlTag text="</h1>" />
          <Box ml={4}>
            <HtmlTag text="<p>" />
            <Typography
              style={{
                fontFamily: "Ubuntu Mono",
                color: "white",
                fontWeight: "lighter",
              }}
            >
              <TypeAnimation
                cursor={true}
                sequence={["I am a software engineer and student.", 1000, " "]}
                wrapper="p"
                repeat={Infinity}
              />
            </Typography>
            <HtmlTag text="</p>" />
            <br />
            <animated.div style={props}>
              <Box mt={2} ml={6}>
                <CustomButton text="about me" 
                onClick={() => 
                // @ts-ignore
                document.getElementById("aboutme").scrollIntoView()}/>
              </Box>
            </animated.div>
          </Box>
        </Grid>
        <Grid xs={4} ml={3}>
          <animated.img
            className="profile"
            src="/picture.jpg"
            alt=""
            style={props}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
