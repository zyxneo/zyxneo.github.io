// @flow

import React from 'react'
import Link from 'gatsby-link'

import {
  Container,
  Header,
  Image,
  Item,
  Popup,
} from 'semantic-ui-react'

import ImageList from '../components/ImageList'

import { work } from './worklist'

const ProjectPreview = (props) => {
  const {
    name,
    alias,
    preview
  } = props

  return (
    <div>
      <Header as={Link} to={`/projects#${alias}`}>{name}</Header>
      <Image src={preview} />
    </div>
  )
}

const WorkItem = (props) => {
  const {
    workplaceId,
    workplaceName,
    workplaceUrl,
    workplaceLogo,
    workplaceCity,
    workedFrom,
    workedTill,
    position,
    jobDescription,
    projects,
    furtherProjects
  } = props

  const LogoUrl = `/images/work/${workplaceId}/${workplaceLogo}`
  return (
    <Item>
      <Item.Image src={LogoUrl} />

      <Item.Content>
        <Item.Header>{position} at <a target='_blank' href={workplaceUrl}>{workplaceName}</a> </Item.Header>
        <Item.Meta>({workedFrom} - {workedTill})</Item.Meta>
        <Item.Description><em>Job description:</em> <div dangerouslySetInnerHTML={{__html: jobDescription}} /></Item.Description>


        {projects && <Item.Header>Projects</Item.Header>}
        {projects && <Image.Group size='tiny'>
          {projects.map(item => (
            <Popup
              trigger={
                <Image
                  key={item.src}
                  src={item.preview}
                  as={Link}
                  to={`/projects#${item.alias}`}
                  className="thumbnail"
                />
              }
              content={item.name}
            />
          ))}
        </Image.Group>}

        {furtherProjects && <Item.Header>Further Projects:</Item.Header>}
        {furtherProjects &&
          <ul>
          {furtherProjects.map(item => (
            <li><a href={item}>{item}</a></li>
          ))}
          </ul>
        }

      </Item.Content>

    </Item>
  )
}

const WorkPage = () => (
  <Container className="work-content">
    <h1>Work</h1>

    <h4>Disclaimer</h4>

    <p>Please notice that none of the mentioned online projects are my property. They can be changed in any time by the owners. There is a high chance, that the example projects may not reflect they state at the point when I was workin on them. The following list was made by me, based on my workexperience, without any permission or agreement of the companies, owners or stakeholders.</p>

    <Item.Group divided>
      {work.map(item => (<WorkItem {...item} key={item.workplaceId} />))}
    </Item.Group>
  </Container>
)

export default WorkPage
