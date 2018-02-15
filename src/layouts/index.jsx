import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {
  Button,
  Container,
  Dropdown,
  Menu
} from 'semantic-ui-react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import 'semantic-ui-css/semantic.min.css';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    {children()}

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
