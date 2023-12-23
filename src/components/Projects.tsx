import ProjectItem from "./ProjectItem";
import { Container } from "@mui/material";

const Projects = () => {
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
        description={
          "“SkillHub” is the online – system for creative people, who want to share their creativity and learn something new about art. It was built with React, Redux, Nest.js, Docker, and PostgreSQL."
        }
        githubLink={"https://github.com/emileyski/avpz-client"}
      />
      <ProjectItem
        title={"Pharmacy"}
        description={`The Nest.js backend API, utilizing MS SQL, incorporates JWT for secure routes and role-based access. Swagger ensures precise REST API documentation. It generates PDF receipts, provides basic statistics on sales, and medicine popularity.`}
        githubLink={" https://github.com/emileyski/apteka-api"}
      />
      <ProjectItem
        title={"Ticketing"}
        description={
          "A small microservice application that contained logic for ordering tickets for events. It was built with Node.js, React, Docker, Kubernetes, and MongoDB."
        }
        githubLink={"https://github.com/emileyski/ticketing"}
      />
    </Container>
  );
};

export default Projects;
