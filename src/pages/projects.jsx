// @flow

import React from 'react'
// import Link from 'gatsby-link';

import {
  Container,
  Header,
  Item,
} from 'semantic-ui-react'

import {
  Disclaimer,
  ProjectItem,
  Slideshow
} from '../components'

import projects from '../db/workplaceProjects'

const ProjectsPage = () => (

  <Container className="projects-content">
    <h1>Workpace Projects</h1>

    <Disclaimer />

    <Item.Group divided>
      {projects.map(item => (<ProjectItem {...item} key={item.alias} />))}
    </Item.Group>

  </Container>
)

export default ProjectsPage
