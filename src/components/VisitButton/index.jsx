// @flow

import React from 'react'

import {
  Button,
  Icon,
} from 'semantic-ui-react'

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

export default VisitButton
