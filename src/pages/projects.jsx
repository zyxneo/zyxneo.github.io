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
  Label,
  Modal,
} from 'semantic-ui-react'

const projects = [
  {
    title: 'bernathjudit.hu',
    subtitle: 'Bernáth Judit portfolio page',
    description: 'My very first website from 2006. I make it from my own, without any help. I learned flash, I made all the photos, even the guestbook. I tried to take care on smallest details, to translate it, and to make it a worthy portfolio for Judit. I also programmed the slider. Now i recognize that I also programmed basic error handling :) It is always a nice to have. I think, I have take the advantage of animation in flash properly, plus the interactivity, the matching music (3-5 track) So it was a "full stack" project, with the first "internet learnings".',
    image: 'bernathjudit.hu.jpg',
    url: 'http://bernathjudit.hu',
    year: 2006,
    tags: [
      'Graphic Design',
      'Photography',
      'Flash',
    ],
  },
  {
    title: 'idakeramia.hu',
    subtitle: 'Pottery portfolio page',
    description: '',
    image: 'idakeramia.hu.jpg',
    url: '',
    year: 2008,
    tags: [
      'Graphic Design',
      'Photography',
      'Joomla',
    ],
  },
  {
    title: 'manonet.org',
    subtitle: 'Free typewriter program',
    description: '',
    image: 'manonet.org.png',
    url: 'http://manonet.org',
    year: '',
    tags: [
      'Graphic Design',
      'Flash',
      'Joomla',
    ],
  },
  {
    title: 'ovarigazdasz.hu',
    subtitle: 'Óvári Gazdászok Szövetsége',
    description: 'I was studied on the West Hungarian University. My friend asked me for help, to create a website for the ###. So I helped by the setup of the webpage, and he published the content. My part was only technical administration and formatting the page to they needs.',
    image: 'ovarigazdasz.hu.jpg',
    url: 'http://ovarigazdasz.hu/',
    year: 2013,
    tags: [
      'Graphic Design',
      'Joomla',
      'Bootstrap',
      'Jquery',
    ],
  },
  {
    title: 'lurkovarovoda.hu',
    subtitle: 'Lurkóvár óvoda kindergarten webpage',
    description: 'The kindergarten was liked it, they still keep it.',
    image: 'lurkovarovoda.hu.jpg',
    url: 'http://lurkovarovoda.hu/',
    year: 2012,
    tags: [
      'Graphic Design',
      'Flash',
    ],
  },
  {
    title: 'mve1985.hu',
    subtitle: 'Mosonmagyaróvári Városvédő Egyesületet',
    description: '',
    image: 'mve1985.hu.jpg',
    url: 'http://www.mve1985.hu',
    year: '2016',
    tags: [
      'Photography',
      'Joomla',
      'Bootstrap',
    ],
  },
  {
    title: 'ialb-eufras-2018.org',
    subtitle: '57th IALB and 7th EUFRAS Agriculture Conference 2018',
    description: '',
    image: 'ialb-eufras-2018.org.jpg',
    url: 'http://ialb-eufras-2018.org',
    year: '2017',
    tags: [
      'Graphic Design',
      'Joomla',
      'Bootstrap',
      'Google Maps'
    ],
  },
]

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
    subtitle,
    description,
    image,
    url,
    year,
    tags,
  } = props

  const imageUrl = `/images/projects/${title}/${image}`

  return (
    <Item>
      <Modal trigger={<Item.Image src={withPrefix(imageUrl)} />} closeIcon>
        <Header content={title} />
        <Modal.Content>
          <Item.Image src={withPrefix(imageUrl)} />
        </Modal.Content>
      </Modal>

      <Item.Content>
        <ProjectTitle url={url} title={title} />
        <Item.Meta>{subtitle} - {year}</Item.Meta>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          {
            tags.map(item => (<Tag content={item} key={item} />))
          }
          <VisitButton url={url} />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

const ProjectsPage = () => (

  <Container>
    <h1>Projects</h1>

    <p>Below listed several pages from my free-time projects. For work related projects visit <a href='https://hu.linkedin.com/in/balázs-szilágyi-112987121'>linkedin</a></p>

    <Item.Group divided>
      {projects.map(item => (<ProjectItem {...item} key={item.title} />))}
    </Item.Group>

    <h2>Websites (private)</h2>

    <h2>Development</h2>

    <ul>
      <li><a href='https://zyxneo.github.io/flexbox/'>zyxneo.github.io/flexbox/</a> - Flexbox experiment</li>
      <li><a href='https://zyxneo.github.io/css/'>zyxneo.github.io/css/</a> - CSS experiments</li>
      <li><a href='https://github.com/zyxneo/checklist/blob/master/website-launch-checklist.md'>launchlist</a> - Checklist collection for creating, launching, updating and testing web projects</li>
    </ul>

  </Container>
)

export default ProjectsPage
