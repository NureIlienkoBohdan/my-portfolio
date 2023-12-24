import { useTranslation } from "react-i18next";
import ProjectItem from "./ProjectItem";
import { Container } from "@mui/material";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 5,
        display: "flex",
        // alignItems: "center",
        justifyContent: "space-around",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <ProjectItem
        title={"Skillhub"}
        description={t("projects.skillhub")}
        githubLink={"https://github.com/emileyski/avpz-client"}
      />
      <ProjectItem
        title={"Pharmacy"}
        description={t("projects.pharmacy")}
        githubLink={" https://github.com/emileyski/apteka-api"}
      />
      <ProjectItem
        title={"Ticketing"}
        description={t("projects.ticketing")}
        githubLink={"https://github.com/emileyski/ticketing"}
      />
    </Container>
  );
};

export default Projects;
