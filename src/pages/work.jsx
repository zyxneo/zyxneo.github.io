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

import {
  Disclaimer,
  ImageList
} from '../components'

import { work } from './worklist'
import workplaceProjects from '../db/workplaceProjects'

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
    furtherProjects
  } = props

  const projects = workplaceProjects.filter(p => p.company === workplaceId)
  const LogoUrl = `/images/work/${workplaceId}/${workplaceLogo}`

  return (
    <Item>
      <Item.Image src={LogoUrl} />

      <Item.Content>
        <Item.Header>{position} at <a target='_blank' href={workplaceUrl}>{workplaceName}</a> </Item.Header>
        <Item.Meta>({workedFrom} - {workedTill})</Item.Meta>
        <Item.Description><em>Job description:</em> <div dangerouslySetInnerHTML={{__html: jobDescription}} /></Item.Description>

        {!!projects.length && <Item.Header>Projects</Item.Header>}
        {!!projects.length && <Image.Group size='tiny'>
          {projects.map(item => (
            <Popup
              key={item.src}
              trigger={
                <Image
                  src={`/images/projects/${item.alias}/${item.image}`}
                  as={Link}
                  to={`/projects#${item.alias}`}
                  className="thumbnail"
                />
              }
              content={<div><b>{item.title}</b><p>{item.subtitle}</p></div>}
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

    <Disclaimer />

    <Item.Group divided>
      {work.map(item => (<WorkItem {...item} key={item.workplaceId} />))}
    </Item.Group>
  </Container>
)

export default WorkPage
