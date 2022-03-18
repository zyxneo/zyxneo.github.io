import React from "react";

import { Container, Item } from "semantic-ui-react";

import { Disclaimer, ProjectItem, Layout } from "../components";

import projects from "../db/workplaceProjects";

const ProjectsPage = () => (
  <Layout className="work">
    <Container className="projects-content">
      <h1>Workpace Projects</h1>

      <Disclaimer />

      <Item.Group divided>
        {projects.map((item) => (
          <ProjectItem {...item} key={item.alias} />
        ))}
      </Item.Group>
    </Container>
  </Layout>
);

export default ProjectsPage;
