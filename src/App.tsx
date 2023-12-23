import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import styles from "./App.module.css";
import SectionTitle from "./components/SectionTitle";
import SkillContainer from "./components/SkillContainer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
      <SectionTitle title={"About me"} />
      <AboutMe />
      <SectionTitle title={"My skills"} />
      <SkillContainer />
      <SectionTitle title={"Projects"} />
      <Projects />
      <SectionTitle title={"Get in touch"} />
      <GetInTouch />
      <SectionTitle
        title="© 2023 by Bohdan Ilienko. Proudly created with React."
        height="20px"
        fontSize="15px"
      />
    </div>
  );
}

export default App;
