import React from 'react'
import Link from 'gatsby-link'

import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu size='large'>
    <Container>
      <Menu.Item as={Link} to='/'>Home</Menu.Item>
      <Menu.Item as={Link} to='/work'>Work</Menu.Item>
      <Menu.Item as={Link} to='/projects'>Projects</Menu.Item>
      <Menu.Item as={Link} to='/contact'>Contact</Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Magyar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

      </Menu.Menu>
    </Container>
  </Menu>
)

const Header = () => (
  <FixedMenu />
)

export default Header
