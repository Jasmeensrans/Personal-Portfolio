import { Box, Typography } from "@mui/material";
import HtmlTag from "../common/HtmlTag";
import CourseCard from "./CourseCard";
// @ts-ignore
import LightSpeed from "react-reveal/LightSpeed";
import TypeAnimation from "react-type-animation";

export default function Experience() {
  return (
    <LightSpeed right>
      <Box id="experience">
        <Box ml={15}>
          <HtmlTag text="<h1>" />
          <Typography
            variant="h3"
            style={{
              color: "#4EC9B0",
              fontFamily: "IBM Plex Sans, sans-serif",
            }}
          >
            Experience
          </Typography>
          <HtmlTag text="</h1>" />
          <Typography
            variant="h4"
            style={{
              color: "#4EC9B0",
              fontFamily: "Ubuntu Mono",
              fontWeight: "bold",
            }}
            mt={5}
          >
            Courses
          </Typography>
          <p style={{ fontFamily: "Ubuntu Mono", color: "white" }}>
          <TypeAnimation
                cursor={true}
                sequence={["The online courses I have completed.", 1000]}
                wrapper="p"
                repeat={Infinity}
              />
          </p>
          <HtmlTag text="<section>" />
          <Box m={3}>
            <CourseCard title=".Net Core and React" author="Udemy" pic="netReact.png" link="https://www.udemy.com/share/101KPu3@h7eOf37c91wxF3zzr1t5ijvMVfEWV0fLAcoXPVtSYQXdIqZlIlJQHzW2ijzB_HdLTw==/"/>
            <CourseCard title="React JS Full Course" author="Free Code Camp" pic="react.png" link="https://www.youtube.com/watch?v=DLX62G4lc44"/>
            <CourseCard title="C# Tutorial Full Course" author="Free Code Camp" pic="csharp.png" link="https://www.youtube.com/watch?v=GhQdlIFylQ8"/>
            <CourseCard title="Javascript Programming" author="Caleb Curey" pic="netReact.png" link="https://www.youtube.com/watch?v=9M4XKi25I2M"/>
          </Box>
          <HtmlTag text="</section>" />
        </Box>
        <Box ml={15}>
        <Typography
            variant="h4"
            style={{
              color: "#4EC9B0",
              fontFamily: "Ubuntu Mono",
              fontWeight: "bold",
            }}
            mt={5}
            mb={3}
          >
            School
          </Typography>
          <Box>
            <div style={{display: 'inline-block'}}><img src="uoft.png" alt=""/></div>
            <div style={{display: 'inline-block', verticalAlign: 'top'}}>
              <Typography variant="h4" style={{color: 'white', fontFamily:"Ubuntu Mono"}}>University of Toronto</Typography>
            <p style={{color: 'white', fontFamily: 'Ubuntu Mono'}}>Computer Science Specalist, Bacholer of Science</p>
            <p style={{color: 'white', fontFamily: 'Ubuntu Mono'}}><i>September 2019 - May 2024</i></p>
            </div>
          </Box>
          <Typography
            variant="h4"
            style={{
              color: "#4EC9B0",
              fontFamily: "Ubuntu Mono",
              fontWeight: "bold",
            }}
            mt={5}
            mb={3}
          >
            Work
          </Typography>
          <Box>
            <div style={{display: 'inline-block', marginRight: '10px'}}><img src="xero.png" alt=""/></div>
            <div style={{display: 'inline-block', verticalAlign: 'top'}}>
              <Typography variant="h4" style={{color: 'white', fontFamily:"Ubuntu Mono"}}>Xero Accounting Software</Typography>
            <p style={{color: 'white', fontFamily: 'Ubuntu Mono', fontWeight: "bold"}}>Software Engineer Intern</p>
            <p style={{color: 'white', fontFamily: 'Ubuntu Mono'}}><i>September 2019 - May 2024</i></p>
            <ul style={{color: 'white', fontFamily: 'Ubuntu Mono'}}>
              <li>desiging frontend UX using React JS, react-query and Redux</li>
              <li>coding backend API using ASP.NET</li>
              <li>writing unit tests using react-testing library</li>
              <li>developing software based on customer needs</li>
            </ul>
            </div>
          </Box>
          </Box>
      </Box>
    </LightSpeed>
  );
}
