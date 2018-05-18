// @flow

import React from 'react'
// import Link from 'gatsby-link'

import {
  Image,
  List,
} from 'semantic-ui-react'

const ImageList = (props) => {
  const {
    items
  } = props

  return (
    <div>
      <List divided horizontal size="huge">
        {items.map(item => (
          <List.Item>
            <Image src={item.image} />
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default ImageList
