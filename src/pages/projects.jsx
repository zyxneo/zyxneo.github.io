// @flow

import React from 'react'
// import Link from 'gatsby-link';
import { withPrefix } from 'gatsby-link'

import {
  Button,
  Container,
  Header,
  Icon,
  Item,
  Image,
  Label,
  Modal,
} from 'semantic-ui-react'


import {
  Slideshow,
} from '../components/index'

import {
  projects,
  privateProjects
} from './projectlist'


const Tag = (props) => {
  const { content } = props
  let icon
  let color

  switch (content) {
    case 'Flash':
      icon = 'lightning'
      color = 'red'
      break

    case 'Joomla':
      icon = 'joomla'
      color = 'yellow'
      break

    case 'Bootstrap':
      icon = 'bold'
      color = 'blue'
      break

    case 'Jquery':
      icon = 'hand outline up'
      color = 'orange'
      break

    case 'Google Maps':
      icon = 'globe'
      color = 'brown'
      break

    case 'Photography':
      icon = 'photo'
      color = 'black'
      break

    case 'Graphic Design':
      icon = 'unhide'
      color = 'pink'
      break

    default:
      icon = 'tag'
      color = 'gray'
      break
  }
  return (
    <Label icon={icon} content={content} color={color} size='small' />
  )
}

const VisitButton = (props) => {
  const { url } = props

  if (url === '' || typeof url === 'undefined') {
    return (
      <Button disabled floated='right'>
        offline
      </Button>
    )
  }
  return (
    <Button as='a' target='_blank' primary floated='right' href={url}>
      visit
      <Icon name='right chevron' />
    </Button>
  )
}

const ProjectTitle = (props) => {
  const { url, title } = props

  if (url === '' || typeof url === 'undefined') {
    return (
      <Item.Header>{title}</Item.Header>
    )
  }
  return (
    <Item.Header as='a' target='_blank' href={url}>{title}</Item.Header>
  )
}

const ProjectItem = (props) => {
  const {
    title,
    alias,
    subtitle,
    description,
    image,
    url,
    year,
    tags,
    images
  } = props

  const imageUrl = `/images/projects/${title}/${image}`

  return (
    <Item id={alias}>
      <Item.Image src={withPrefix(imageUrl)} />
      <Item.Content>
        <ProjectTitle url={url} title={title} />
        <Item.Meta>{subtitle} - {year}</Item.Meta>
        <Item.Description><div dangerouslySetInnerHTML={{__html: description}} /></Item.Description>
        <Item.Extra>
          {
            tags.map(item => (<Tag content={item} key={item} />))
          }
          <VisitButton url={url} />
        </Item.Extra>
        <Image.Group size='tiny'>
          {
            images && images.map((item, index) => (
              <Slideshow
                key={item.src}
                item={item}
                items={images}
                selectedIndex={index}
                title={title}
              />
            ))
          }

        </Image.Group>
      </Item.Content>
    </Item>
  )
}

const ProjectsPage = () => (

  <Container>
    <h1>Projects</h1>

    <h2>Workpace Projects</h2>

    <Item.Group divided>
      {projects.map(item => (<ProjectItem {...item} key={item.alias} />))}
    </Item.Group>

    <h2>Private Websites</h2>

    <p>Below listed several pages from my free-time projects. I made them for myself for fun, or for my friends.</p>

    <Item.Group divided>
      {privateProjects.map(item => (<ProjectItem {...item} key={item.alias} />))}
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
