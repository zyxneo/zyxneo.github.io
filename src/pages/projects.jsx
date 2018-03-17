import React from 'react'
import Link from 'gatsby-link'

import {
  Button,
  Container,
  Dropdown,
  Header,
  Icon,
  Image as ImageComponent,
  Item,
  Label,
  Menu,
  Segment
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
      'Flash'
    ]
  },
  {
    title: 'manonet.org',
    subtitle: 'Free typewriter program',
    description: '',
    image: 'manonet.org.jpg',
    url: 'http://manonet.org',
    year: '',
    tags: [
      'Flash',
      'Joomla'
    ]
  },
  {
    title: 'ovarigazdasz.hu',
    subtitle: 'Óvári Gazdászok Szövetsége',
    description: 'I was studied on the West Hungarian University. My friend asked me for help, to create a website for the ###. So I helped by the setup of the webpage, and he published the content. My part was only technical administration and formatting the page to they needs.',
    image: 'ovarigazdasz.hu.jpg',
    url: 'http://ovarigazdasz.hu/',
    year: 2013,
    tags: [
      'Joomla',
      'Bootstrap',
      'Jquery'
    ]
  },
  {
    title: 'lurkovarovoda.hu',
    subtitle: 'Lurkóvár óvoda kindergarten webpage',
    description: 'The kindergarten was liked it, they still keep it.',
    image: 'lurkovarovoda.hu.jpg',
    url: 'http://lurkovarovoda.hu/',
    year: 2012,
    tags: [
      'Flash'
    ]
  },
  {
    title: 'mve1985.com',
    subtitle: 'Mosonmagyaróvári Városvédő Egyesületet',
    description: '',
    image: 'mve1985.com.jpg',
    url: 'http://www.mve1985.com',
    year: '',
    tags: [
      'Joomla',
      'Bootstrap'
    ]
  }
];

const Tag = props => {
  const {content} = props;
  let icon, color;

  switch (content) {
    case 'Flash':
      icon = 'lightning'
      color = 'red'
      break;

    case 'Joomla':
      icon = 'joomla'
      color = 'yellow'
      break;

    case 'Bootstrap':
      icon = 'bold'
      color = 'blue'
      break;

    case 'Jquery':
      icon = 'hand outline up'
      color = 'orange'
      break;

    case 'Google Maps':
      icon = 'globe'
      color = 'brown'
      break;

    default:
      icon = 'tag'
      color = 'gray'
      break;
  }
  return (
    <Label icon={icon} content={content} color={color} size="mini"/>
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
    tags
  } = props;

  const imageUrl = `/static/images/${image}`;
  return (
    <Item>
      <Item.Image src={imageUrl} />

      <Item.Content>
        <Item.Header as='a' target="_blank" href={url}>{title}</Item.Header>
        <Item.Meta>{subtitle} - {year}</Item.Meta>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          {
            tags.map((item, index) => (<Tag content={item} key={index}/>))
          }
          <Button as="a" target="_blank" primary floated='right' href={url}>
            visit
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

const ProjectsPage = () => (

  <Container>
    <h1>Projects</h1>

    <p>Below listed several pages from my free-time projects. For work related projects visit <a href="https://hu.linkedin.com/in/balázs-szilágyi-112987121">linkedin</a></p>

    <Item.Group divided>
      {projects.map((item, index) => (<ProjectItem {...item} key={index}/>))}
    </Item.Group>

    <h2>Websites (private)</h2>

    <h2>Development</h2>

    <ul>
      <li><a href="https://zyxneo.github.io/flexbox/">zyxneo.github.io/flexbox/</a> - Flexbox experiment</li>
      <li><a href="https://zyxneo.github.io/css/">zyxneo.github.io/css/</a> - CSS experiments</li>
      <li><a href="https://github.com/zyxneo/checklist/blob/master/website-launch-checklist.md">launchlist</a> - Checklist collection for creating, launching, updating and testing web projects</li>
      <li><a href=""></a></li>
    </ul>

  </Container>
)

export default ProjectsPage
