// @flow

import React from 'react'
import Link from 'gatsby-link'

import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import {
  Container,
  Header,
  Image,
  Item,
  Popup,
} from 'semantic-ui-react'

import {
  Disclaimer,
  ImageLoader,
  Tag,
} from '../components'

import worklist from '../db/worklist'

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
        <Item.Header>
          {position}
          <span className="meta"> <FormattedMessage id="work.at.position" defaultMessage="at"/> </span>
          <a target='_blank' href={workplaceUrl}>{workplaceName}</a>
        </Item.Header>
        <Item.Meta>({workedFrom} - {workedTill})</Item.Meta>
        <Item.Description>
          <em><FormattedMessage id="work.jobDescription" defaultMessage="Job description"/>:</em>
          <div>{jobDescription}</div>
        </Item.Description>

        {!!projects.length && <Item.Header className="itemHeader">
          <FormattedMessage id="work.projects" defaultMessage="Related Projects"/>
        </Item.Header>}
        {!!projects.length && <Item.Group>
          {projects.map(item => (
            <Item
              key={item.alias}
              className="workProjectItem"
            >
              <Item.Image
                as={Link}
                to={`/projects#${item.alias}`}
                size="tiny"
              >
                <ImageLoader src={`/images/projects/${item.alias}/${item.image}`} />
              </Item.Image>
              <Item.Content>
                <Item.Header as={Link} to={`/projects#${item.alias}`}>{item.title}</Item.Header>
                <Item.Meta>{item.subtitle} - {item.year}</Item.Meta>
                <Item.Extra>
                  {
                    item.tags.map(item => (<Tag content={item} key={item} size="mini" />))
                  }
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>}

      {furtherProjects && <Item.Header className="itemHeader">
        <FormattedMessage id="work.furtherProjects" defaultMessage="Further Projects"/>
      </Item.Header>}
        {furtherProjects &&
          <ul>
          {furtherProjects.map(item => (
            <li key={item}>{item}</li>
          ))}
          </ul>
        }

      </Item.Content>

    </Item>
  )
}

const propTypes = {
  intl: intlShape.isRequired,
};

const WorkPage = ({intl}) => (
  <Container className="work-content">
    <h1><FormattedMessage id="work.title" defaultMessage="Work"/></h1>

    <Disclaimer />

    <Item.Group divided>
      {worklist.map(item => (<WorkItem {...item} key={item.workplaceId} />))}
    </Item.Group>
  </Container>
)

WorkPage.propTypes = propTypes

export default injectIntl(WorkPage)
