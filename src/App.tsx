import React from "react";
import AboutMe from "./components/about_me/AboutMe";
import BackToTop from "./components/common/BackToTop";
import CodeLines from "./components/common/CodeLines";
import { Navbar } from "./components/common/Navbar";
import Experience from "./components/experience/Experience";
import Landing from "./components/landing/Landing";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <CodeLines />
      <Navbar />
      <Landing />
      <Skills />
      <Experience />
      <AboutMe />
      <BackToTop />
    </div>
  );
}

export default App;
