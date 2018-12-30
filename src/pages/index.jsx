// @flow

import React from 'react'
import Kaleidoscope from '../components/Kaleidoscope'

// import Link from 'gatsby-link'

import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react'

class IndexPage extends React.Component {
  render() {
    return (
      <Container>
        <Kaleidoscope />
      </Container>
    )
  }
}

export default IndexPage
