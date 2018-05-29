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
  Popup,
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
  let description

  switch (content) {
    case 'CSS':
      icon = 'diamond'
      color = 'olive'
      description = 'Creation of SCSS/CSS, layout, styling'
      break

    case 'HTML':
      icon = 'code'
      color = 'purple'
      description = 'Creation of HTML, templates, basic SEO'
      break

    case 'Flash':
      icon = 'lightning'
      color = 'red'
      description = 'Made with Macromedia/Adobe Flash'
      break

    case 'Joomla':
      icon = 'joomla'
      color = 'yellow'
      description = 'Made with Joomla! content management system'
      break

    case 'Bootstrap':
      icon = 'bold'
      color = 'blue'
      description = 'Layout is built on top of Bootstrap CSS'
      break

    case 'Jquery':
      icon = 'hand pointer'
      color = 'orange'
      description = 'Jquery javascript library is used'
      break

    case 'Google Maps':
      icon = 'globe'
      color = 'brown'
      description = 'Google Maps API is used'
      break

    case 'Photography':
      icon = 'photo'
      color = 'black'
      description = 'Photos was made by me'
      break

    case 'Graphic Design':
      icon = 'newspaper'
      color = 'pink'
      description = 'At least layout was designed by me'
      break

    default:
      icon = 'tag'
      color = 'gray'
      break
  }
  return (
    <Popup
      trigger={<Label icon={icon} content={content} color={color} size='small' />}
      content={description}
    />
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

  const imageUrl = `/images/projects/${alias}/${image}`

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

  <Container className="projects-content">
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
