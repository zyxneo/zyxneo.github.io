import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";

import { Label, Popup, SemanticCOLORS, SemanticSIZES } from "semantic-ui-react";

type Props = {
  content: string;
  size?:
    | "mini"
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "big"
    | "huge"
    | "massive";
};

const Tag = ({ content, ...restProps }: Props) => {
  let icon;
  let color: SemanticCOLORS = "grey";
  let description;

  const size: SemanticSIZES = restProps.size || "small";

  switch (content) {
    case "CSS":
      icon = "diamond";
      color = "olive";
      description = (
        <FormattedMessage
          id="tag.css.desc"
          defaultMessage="Creation of SCSS/CSS, layout, styling"
        />
      );
      break;

    case "HTML":
      icon = "code";
      color = "purple";
      description = (
        <FormattedMessage
          id="tag.html.desc"
          defaultMessage="Creation of HTML, templates, basic SEO"
        />
      );
      break;

    case "Flash":
      icon = "lightning";
      color = "red";
      description = (
        <FormattedMessage
          id="tag.flash.desc"
          defaultMessage="Made with Macromedia/Adobe Flash"
        />
      );
      break;

    case "Joomla":
      icon = "joomla";
      color = "yellow";
      description = (
        <FormattedMessage
          id="tag.joomla.desc"
          defaultMessage="Made with Joomla! content management system"
        />
      );
      break;

    case "Bootstrap":
      icon = "bold";
      color = "blue";
      description = (
        <FormattedMessage
          id="tag.bootstrap.desc"
          defaultMessage="Layout is built on top of Bootstrap CSS"
        />
      );
      break;

    case "Jquery":
      icon = "hand pointer";
      color = "green";
      description = (
        <FormattedMessage
          id="tag.jquery.desc"
          defaultMessage="Jquery javascript library is used"
        />
      );
      break;

    case "Google Maps":
      icon = "globe";
      color = "brown";
      description = (
        <FormattedMessage
          id="tag.googleMaps.desc"
          defaultMessage="Google Maps API is used"
        />
      );
      break;

    case "Photography":
      icon = "photo";
      color = "black";
      description = (
        <FormattedMessage
          id="tag.photography.desc"
          defaultMessage="Photos was made by me"
        />
      );
      break;

    case "Graphic Design":
      icon = "newspaper";
      color = "pink";
      description = (
        <FormattedMessage
          id="tag.graphicDesign.desc"
          defaultMessage="At least layout was designed by me"
        />
      );
      break;

    case "Gatsby":
      icon = "google";
      color = "violet";
      description = (
        <FormattedMessage
          id="tag.gatsby.desc"
          defaultMessage="Built with Gatsby js"
        />
      );
      break;

    case "React":
      icon = "react";
      color = "teal";
      description = (
        <FormattedMessage
          id="tag.react.desc"
          defaultMessage="React javascript framework was used"
        />
      );
      break;

    case "D3":
      icon = "chart line";
      color = "orange";
      description = (
        <FormattedMessage
          id="tag.d3.desc"
          defaultMessage="Data driven documents"
        />
      );
      break;

    default:
      icon = "tag";
      break;
  }
  return (
    <Popup
      trigger={
        <Label icon={icon} content={content} color={color} size={size} />
      }
      content={description}
    />
  );
};

export default Tag;
