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
  ImageList,
  ImageLoader,
  Tag,
} from '../components'

import { work as work_en } from '../db/worklist_en'
import { work as work_hu } from '../db/worklist_hu'
import { work as work_de } from '../db/worklist_de'

const works = {
  en: work_en,
  hu: work_hu,
  de: work_de,
};

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

        {!!projects.length && <Item.Header className="itemHeader">Related Projects</Item.Header>}
        {!!projects.length && <Item.Group>
          {projects.map(item => (
            <Item
              key={item.src}
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

  {furtherProjects && <Item.Header className="itemHeader">Further Projects</Item.Header>}
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

const propTypes = {
  intl: intlShape.isRequired,
};

const WorkPage = ({intl}) => (
  <Container className="work-content">
    <h1><FormattedMessage id="work.title" defaultMessage="Munka"/></h1>

    <Disclaimer />

    <Item.Group divided>
      {works[intl.locale].map(item => (<WorkItem {...item} key={item.workplaceId} />))}
    </Item.Group>
  </Container>
)

WorkPage.propTypes = propTypes

export default injectIntl(WorkPage)
