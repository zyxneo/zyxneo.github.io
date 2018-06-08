// @flow

import React from 'react'
import Link from 'gatsby-link'

import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl'

import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

const Header = (props) => (
  <Menu size='large'>
    <Container>
      <Menu.Item as={Link} to='/'>Home</Menu.Item>
      <Menu.Item as={Link} to='/work'><FormattedMessage id="work.title" /></Menu.Item>
      <Menu.Item as={Link} to='/projects'>Projects</Menu.Item>
      <Menu.Item as={Link} to='/private'>Private</Menu.Item>

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
