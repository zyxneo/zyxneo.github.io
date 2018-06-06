// @flow

import React from 'react'

import {
  Label,
  Popup,
} from 'semantic-ui-react'

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

export default Tag
