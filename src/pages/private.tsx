import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";

import { Container, Item } from "semantic-ui-react";

import { ProjectItem, Layout } from "../components";

import projects from "../db/privateProjects";

const ProjectsPage = () => (
  <Layout className="private">
    <Container className="projects-content">
      <h1>
        <FormattedMessage
          id="private.title"
          defaultMessage="Private Websites"
        />
      </h1>

      <p>
        <FormattedMessage
          id="private.desc"
          defaultMessage="Below listed several pages from my free-time projects. I made them for myself for fun, or for my friends."
        />
      </p>

      <Item.Group divided>
        {projects.map((item) => (
          <ProjectItem {...item} key={item.alias} />
        ))}
      </Item.Group>

      <h2>Development</h2>

      <ul>
        <li>
          <a href="https://zyxneo.github.io/flexbox/">
            zyxneo.github.io/flexbox/
          </a>{" "}
          - Flexbox experiment
        </li>
        <li>
          <a href="https://zyxneo.github.io/css/">zyxneo.github.io/css/</a> -
          CSS experiments
        </li>
        <li>
          <a href="https://github.com/zyxneo/checklist/blob/master/website-launch-checklist.md">
            launchlist
          </a>{" "}
          - Checklist collection for creating, launching, updating and testing
          web projects
        </li>
      </ul>
    </Container>
  </Layout>
);

export default ProjectsPage;
