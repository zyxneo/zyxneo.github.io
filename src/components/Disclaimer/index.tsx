import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { Icon, Message } from "semantic-ui-react";

const Disclaimer = () => (
  <Message color="brown" icon>
    <Icon name="balance scale" />
    <Message.Content>
      <Message.Header>
        <FormattedMessage id="disclaimer.title" defaultMessage="Disclaimer" />
      </Message.Header>
      <FormattedMessage
        id="disclaimer.body"
        defaultMessage="Please notice that none of the mentioned online projects on this page are my property. They can be changed in any time by the owners. There is a high chance, that the example projects may not reflect they state at the point when I was workin on them. The following list was made by me, based on my workexperience, without any permission or agreement of the companies, owners or stakeholders. I was worked as a team member in all of the companies, we was made teamwork, none of the projects are my individual work."
      />
    </Message.Content>
  </Message>
);

export default Disclaimer;
