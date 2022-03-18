import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";

import { Button, Icon } from "semantic-ui-react";

type Props = {
  url?: string;
};

const VisitButton = ({ url }: Props) => {
  if (url === "" || typeof url === "undefined") {
    return (
      <Button disabled floated="right">
        <FormattedMessage id="projectItem.offline" defaultMessage="Offline" />
      </Button>
    );
  }
  return (
    <Button as="a" target="_blank" primary floated="right" href={url}>
      <FormattedMessage id="projectItem.visit" defaultMessage="Visit" />
      <Icon name="chevron right" />
    </Button>
  );
};

export default VisitButton;
