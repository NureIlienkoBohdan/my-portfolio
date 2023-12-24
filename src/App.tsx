import Navbar from "./components/Navbar";
import Home from "./components/Home";
import styles from "./App.module.css";
import SectionTitle from "./components/SectionTitle";
import SkillContainer from "./components/SkillContainer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
      <SectionTitle title={t("about.title")} />
      <AboutMe />
      <SectionTitle title={t("skills.title")} />
      <SkillContainer />
      <SectionTitle title={t("projects.title")} />
      <Projects />
      <SectionTitle title={t("get-in-touch.title")} />
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
