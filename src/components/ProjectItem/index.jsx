// @flow

import React from 'react'
import { withPrefix } from 'gatsby-link'

import {
  Image,
  Item,
} from 'semantic-ui-react'

import {
  Slideshow,
  Tag,
  VisitButton,
} from '../index.js'

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
                alias={alias}
              />
            ))
          }
        </Image.Group>
      </Item.Content>
    </Item>
  )
}

export default ProjectItem
