// @flow

import React from 'react'
// import Link from 'gatsby-link';

import {
  Container,
  Header,
  Item,
} from 'semantic-ui-react'

import {
  ProjectItem,
  Slideshow
} from '../components'

import projects from '../db/privateProjects'

const ProjectsPage = () => (

  <Container className="projects-content">
    <h1>Private Websites</h1>

    <p>Below listed several pages from my free-time projects. I made them for myself for fun, or for my friends.</p>

    <Item.Group divided>
      {projects.map(item => (<ProjectItem {...item} key={item.alias} />))}
    </Item.Group>

    <h2>Development</h2>

    <ul>
      <li><a href='https://zyxneo.github.io/flexbox/'>zyxneo.github.io/flexbox/</a> - Flexbox experiment</li>
      <li><a href='https://zyxneo.github.io/css/'>zyxneo.github.io/css/</a> - CSS experiments</li>
      <li><a href='https://github.com/zyxneo/checklist/blob/master/website-launch-checklist.md'>launchlist</a> - Checklist collection for creating, launching, updating and testing web projects</li>
    </ul>

  </Container>
)

export default ProjectsPage
