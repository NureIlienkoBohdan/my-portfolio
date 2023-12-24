import { useTranslation } from "react-i18next";
import SkillItem from "./SkillItem";
import { Container } from "@mui/material";

const SkillContainer = () => {
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
      <SkillItem
        skillLogo="/skills-pictures/node-js-icon.svg"
        skillName="Node.js"
        skillDescription={t("skills.Node.js")}
      />
      <SkillItem
        skillLogo="/skills-pictures/react-js-icon.svg"
        skillName="React"
        skillDescription={t("skills.React")}
      />
      <SkillItem
        skillLogo="/skills-pictures/nest-js-icon.svg"
        skillName="Nest.js"
        skillDescription={t("skills.Nest.js")}
      />
      <SkillItem
        skillLogo="/skills-pictures/docker-icon.svg"
        skillName="Docker"
        skillDescription={t("skills.Docker")}
      />

      <SkillItem
        skillLogo="/skills-pictures/kubernetes-icon.svg"
        skillName="Kubernetes"
        skillDescription={t("skills.Kubernetes")}
      />

      <SkillItem
        skillLogo="/skills-pictures/rabbitmq-icon.svg"
        skillName="RabbitMQ"
        skillDescription={t("skills.RabbitMQ")}
      />
      <SkillItem
        skillLogo="/skills-pictures/postgresql-icon.svg"
        skillName="PostgreSQL"
        skillDescription={t("skills.PostgreSQL")}
      />

      <SkillItem
        skillLogo="/skills-pictures/mongodb-icon.svg"
        skillName="MongoDB"
        skillDescription={t("skills.MongoDB")}
      />

      {/* <SkillItem
        skillLogo="/skills-pictures/typescript-programming-language-icon.svg"
        skillName="TypeScript"
        skillDescription="Elevating development with TypeScript, I've brought type safety to projects, ensuring code reliability and maintainability."
      /> */}
    </Container>
  );
};

export default SkillContainer;
