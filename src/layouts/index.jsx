// @flow

import React from 'react'
import type { Node } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl'

// $FlowIgnore
import de from 'react-intl/locale-data/de';
// $FlowIgnore
import hu from 'react-intl/locale-data/hu';
// $FlowIgnore
import en from 'react-intl/locale-data/en';

import messageKeys from '../../translations/locales';

// $FlowIgnore
import 'semantic-ui-css/semantic.min.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'

addLocaleData([
  ...en,
  ...hu,
  ...de,
]);

/* Define your default translations */
let i18nConfig = {
  locale: 'en',
  messages: messageKeys['en']
};

type TemplateWrapperProps = {
  // $FlowIgnore
  children: any
}

type TemplateWrapperState = {
  locale: string
}
class TemplateWrapper extends React.Component<TemplateWrapperProps, TemplateWrapperState> {
  props: TemplateWrapperProps
  state: TemplateWrapperState

  onChangeLanguage = (lang: string) => {

    switch (lang) {
        case 'en': i18nConfig.messages = messageKeys['en']; break;
        case 'hu': i18nConfig.messages = messageKeys['hu']; break;
        case 'de': i18nConfig.messages = messageKeys['de']; break;
        default: i18nConfig.messages = messageKeys['en']; break;
    }

    // in order to rerender the page, state should be chenged
    this.setState({ locale: lang });

    i18nConfig.locale = lang;
  }

  render() {
    return (
      <IntlProvider key={ i18nConfig.locale } locale={i18nConfig.locale} messages={i18nConfig.messages}>
        <div>
          <Helmet
            title="Portfolio"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header onChangeLanguage={this.onChangeLanguage}/>

            {this.props.children()}

          <Footer />
        </div>
      </IntlProvider>
    )
  }
}

export default TemplateWrapper
