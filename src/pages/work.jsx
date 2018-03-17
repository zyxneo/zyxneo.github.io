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

const work = [
  {
    workplaceName: 'InfoartNet',
    workplaceUrl: 'htttp://infoartnet.hu',
    workplaceLogo: 'infoartnet.jpg',
    workplaceCity: 'Győr',
    workedFrom: 2008,
    workedTill: 2009,
    position: 'Graphic, Sitebuilder',
    jobDescription: 'Creating graphic design for clients in Fireworks, "sliceing" the self made or other designs, creating web templates and implementing the templates into the multisite CMS system. Designing and programming flash banners or flash webpage components.',
    projects: [

    ]
  }
]

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

const WorkItem = (props) => {
  const {
    workplaceName,
    workplaceUrl,
    workplaceLogo,
    workplaceCity,
    workedFrom,
    workedTill,
    position,
    jobDescription
  } = props;

  const LogoUrl = `/static/images/${workplaceLogo}`;
  return (
    <Item>
      <Item.Image src={LogoUrl} />

      <Item.Content>
        <Item.Header>{position} at <a target="_blank" href={workplaceUrl}>{workplaceName}</a> </Item.Header>
        <Item.Meta>({workedFrom} - {workedTill})</Item.Meta>
        <Item.Description><em>Job description:</em> {jobDescription}</Item.Description>
      </Item.Content>
    </Item>
  )
}

const WorkPage = () => (
  <Container>
    <h1>Work</h1>

    <h3>Disclaimer</h3>

    <p>Please notice that none of the mentioned online projects are my property. They can be changed in any time by the owners. There is a high chance, that the example projects may not reflect they state at the point when I was workin on them. The following list was made by me, based on my workexperience, without any permission or agreement of the companies, owners or stakeholders.</p>

    <Item.Group divided>
      {work.map((item, index) => (<WorkItem {...item} key={index}/>))}
    </Item.Group>
  </Container>
)

export default WorkPage
