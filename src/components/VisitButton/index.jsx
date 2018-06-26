// @flow

import React from 'react'

import { IntlProvider, FormattedMessage } from 'react-intl'

import {
  Button,
  Icon,
} from 'semantic-ui-react'

type VisitButtonProps = {
  url: string;
}

const VisitButton = (props: VisitButtonProps) => {
  const { url } = props

  if (url === '' || typeof url === 'undefined') {
    return (
      <Button disabled floated='right'>
        <FormattedMessage id="projectItem.offline" defaultMessage="Offline"/>
      </Button>
    )
  }
  return (
    <Button as='a' target='_blank' primary floated='right' href={url}>
      <FormattedMessage id="projectItem.visit" defaultMessage="Visit"/>
      <Icon name='right chevron' />
    </Button>
  )
}

export default VisitButton
