// @ts-nocheck
import React from "react";
import "./styles.css";
import { Box, Link, Toolbar } from "@mui/material";
import CustomButton from "./CustomButton";
import { config, useSpring, animated } from "react-spring";

export function Navbar() {

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 600,
    config: config.molasses,
  });
  return (
    <Box mr={7} ml={7} id="navbar">
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          textTransform: "lowercase",
        }}
      >
        <Link
          m={4}
          className="nav"
          component="button"
          onClick={() => document.getElementById("aboutme").scrollIntoView()}
          style={{ fontSize: "14px" }}
        >
          <animated.text style={props}>about me</animated.text>
        </Link>
        <Link
          m={4}
          className="nav"
          component="button"
          onClick={() => document.getElementById("skills").scrollIntoView()}
          style={{ fontSize: "14px" }}
        >
          <animated.text style={props}>skills</animated.text>
        </Link>
        <Link
          m={4}
          className="nav"
          component="button"
          onClick={() => document.getElementById("experience").scrollIntoView()}
          style={{ fontSize: "14px" }}
        >
          <animated.text style={props}>experience</animated.text>
        </Link>
        <animated.div style={props}>
          <Box m={4}>
            <CustomButton
              text="contact"
              onClick={() =>
                document.getElementById("contact").scrollIntoView()
              }
            />
          </Box>
        </animated.div>
      </Toolbar>
    </Box>
  );
}
