import React from "react";
import { withPrefix } from "gatsby-link";

import { Project } from "../../db/types";

import { FormattedMessage } from "gatsby-plugin-intl";

import { Image, Item } from "semantic-ui-react";

import { ImageLoader, Slideshow, Tag, VisitButton } from "../index";

import "./projectItem.css";

type ProjectTitleProps = {
  title: string;
  url?: string;
};

const ProjectTitle = (props: ProjectTitleProps) => {
  const { url, title } = props;

  if (url === "" || typeof url === "undefined") {
    return <Item.Header>{title}</Item.Header>;
  }
  return (
    <Item.Header as="a" target="_blank" href={url}>
      {title}
    </Item.Header>
  );
};

export type ProjectImageProps = {
  desc?: string;
  title?: string;
  src: string;
};

const ProjectItem = (props: Project) => {
  const {
    alias,
    description,
    image,
    images,
    subtitle,
    tags,
    title,
    url,
    year,
  } = props;

  const imageUrl = `/images/projects/${alias}/${image}`;

  return (
    <Item id={alias} className="projectItem">
      <Item.Image>
        <ImageLoader src={withPrefix(imageUrl)} />
      </Item.Image>
      <Item.Content>
        <ProjectTitle url={url} title={title} />
        <Item.Meta>
          {subtitle} - {year}
        </Item.Meta>
        <Item.Description>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Item.Description>
        <Item.Extra>
          {tags && tags.map((item) => <Tag content={item} key={item} />)}
          <VisitButton url={url} />
        </Item.Extra>

        <Item.Header className="itemHeader">
          <FormattedMessage
            id="projectItem.itemHeader.screenshots"
            defaultMessage="Screenshots"
          />
        </Item.Header>

        <Image.Group size="tiny">
          {images &&
            images.map((item, index) => (
              <Slideshow
                key={item.src}
                item={item}
                items={images}
                selectedIndex={index}
                title={title}
                alias={alias}
              />
            ))}
        </Image.Group>
      </Item.Content>
    </Item>
  );
};

export default ProjectItem;
