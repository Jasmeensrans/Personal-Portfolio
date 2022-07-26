import { Typography, Box } from "@mui/material";
import CustomButton from "../common/CustomButton";
import HtmlTag from "../common/HtmlTag";
import { IconContext } from "react-icons";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export default function ProjectCard(props: {
  title: String;
  info: string;
  pic: string;
  align: String;
}) {
  return (
    <>
      <Box mt={6} mr={11}>
        {props.align === "left" ? (
          <>
            <Box style={{ width: "30%", display: "inline-block" }}>
              <img src={props.pic} alt="" style={{ height: "50vh" }} />
            </Box>
            <Box
              style={{
                width: "70%",
                display: "inline-block",
                verticalAlign: "top",
              }}
            >
              <HtmlTag text="<section>" />
              <Box ml={3} mb={2}>
                <Typography
                  variant="h5"
                  style={{ fontFamily: "Ubuntu Mono", color: "#4EC9B0" }}
                >
                  {props.title}
                </Typography>
                <p style={{ fontFamily: "Ubuntu Mono", color: "white" }}>
                  {props.info}
                </p>
                <CustomButton
                  text="see it on Github"
                  onClick={() =>
                    // eslint-disable-next-line no-restricted-globals
                    (location.href =
                      "https://github.com/Jasmeensrans/Airline-Reservation-System")
                  }
                />
              </Box>
              <HtmlTag text="</section>" />
            </Box>
          </>
        ) : (
          <>
            <Box
              style={{
                width: "70%",
                display: "inline-block",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  textAlign: "right",
                  fontFamily: "Ubuntu Mono",
                  color: "#4b4b4b",
                }}
              >
                {"<section>"}
              </p>
              <Box mr={3} mb={3}>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Ubuntu Mono",
                    color: "#4EC9B0",
                    textAlign: "right",
                  }}
                >
                  {props.title}
                </Typography>
                <p style={{ textAlign: "right" }}>
                  <IconContext.Provider value={{ color: "369CED" }}>
                    <FaReact /> <FaCss3Alt /> <FaNodeJs /> <SiTypescript />
                  </IconContext.Provider>
                </p>
                <p
                  style={{
                    fontFamily: "Ubuntu Mono",
                    color: "white",
                    textAlign: "right",
                  }}
                >
                  {props.info}
                </p>
                <div style={{ float: "right" }}>
                  <CustomButton text="see it on Github" />
                </div>
              </Box>
              <br />
              <br />
              <p
                style={{
                  textAlign: "right",
                  fontFamily: "Ubuntu Mono",
                  color: "#4b4b4b",
                }}
              >
                {"</section>"}
              </p>
            </Box>
            <Box style={{ width: "30%", display: "inline-block" }}>
              <img src={props.pic} alt="" style={{ height: "50vh" }} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
