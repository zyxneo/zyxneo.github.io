// @flow
import React from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const Disclaimer = () => (
  <div>

    <h4><FormattedMessage id="disclaimer.title" defaultMessage="Disclaimer"/></h4>

    <p><FormattedMessage id="disclaimer.body" defaultMessage="Please notice that none of the mentioned online projects on this page are my property. They can be changed in any time by the owners. There is a high chance, that the example projects may not reflect they state at the point when I was workin on them. The following list was made by me, based on my workexperience, without any permission or agreement of the companies, owners or stakeholders. I was worked as a team member in all of the companies, we was made teamwork, none of the projects are my individual work."/></p>

  </div>
)

export default Disclaimer
