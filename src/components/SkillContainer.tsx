import React from "react";
import styles from "./SkillContainer.module.css";
import SkillItem from "./SkillItem";
import { Container } from "@mui/material";

const SkillContainer = () => {
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
        skillDescription="Mastering the backend with Node.js, Express.js, and MongoDB, I've crafted robust REST APIs that power my projects."
      />
      <SkillItem
        skillLogo="/skills-pictures/react-js-icon.svg"
        skillName="React"
        skillDescription="Fueling dynamic user interfaces with React, Redux, and Next.js, I've brought engaging web experiences to life."
      />
      <SkillItem
        skillLogo="/skills-pictures/nest-js-icon.svg"
        skillName="Nest.js"
        skillDescription="Architecting scalable backend systems with Nest.js, TypeORM, and PostgreSQL, I've developed RESTful APIs for seamless integration."
      />
      <SkillItem
        skillLogo="/skills-pictures/docker-icon.svg"
        skillName="Docker"
        skillDescription="Leveraging Docker, I've containerized applications, streamlining deployment and ensuring consistent environments."
      />

      <SkillItem
        skillLogo="/skills-pictures/kubernetes-icon.svg"
        skillName="Kubernetes"
        skillDescription="Orchestrating scalable and resilient applications with Kubernetes, I've designed and managed clusters for efficient deployment."
      />

      <SkillItem
        skillLogo="/skills-pictures/rabbitmq-icon.svg"
        skillName="RabbitMQ"
        skillDescription="Enhancing communication between microservices with RabbitMQ, I've implemented robust message queuing systems."
      />
      <SkillItem
        skillLogo="/skills-pictures/postgresql-icon.svg"
        skillName="PostgreSQL"
        skillDescription="Empowering data-driven applications with PostgreSQL, I've designed and managed relational database clusters."
      />

      <SkillItem
        skillLogo="/skills-pictures/mongodb-icon.svg"
        skillName="MongoDB"
        skillDescription="Championing flexible and scalable databases with MongoDB, I've engineered solutions for data-intensive applications."
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
