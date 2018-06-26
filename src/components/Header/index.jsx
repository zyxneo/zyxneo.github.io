// @flow

import React from 'react'
import Link from 'gatsby-link'

import { IntlProvider, FormattedMessage } from 'react-intl'

import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

type HeaderProps = {
  // $FlowIgnore
  onChangeLanguage: Function
}

const Header = (props: HeaderProps) => (
  <Menu size='large'>
    <Container>
      <Menu.Item as={Link} to='/'>
        <FormattedMessage id="nav.home" defaultMessage="Home" />
      </Menu.Item>
      <Menu.Item as={Link} to='/work'>
        <FormattedMessage id="nav.work" defaultMessage="Work"/>
      </Menu.Item>
      <Menu.Item as={Link} to='/projects'>
        <FormattedMessage id="nav.projects" defaultMessage="Projects" />
      </Menu.Item>
      <Menu.Item as={Link} to='/private'>
        <FormattedMessage id="nav.private" defaultMessage="Private" />
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={e => props.onChangeLanguage("en", e)}>English</Dropdown.Item>
              <Dropdown.Item onClick={e => props.onChangeLanguage("hu", e)}>Magyar</Dropdown.Item>
              <Dropdown.Item onClick={e => props.onChangeLanguage("de", e)}>Deutsch</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

      </Menu.Menu>
    </Container>
  </Menu>
)

export default Header
