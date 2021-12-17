import React from "react";

import "./footer.css";

import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Icon,
} from "semantic-ui-react";

const LayoutFooter = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }} className="footer">
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={7}></Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Contact" />
            <List link inverted>
              <List.Item as="li">Szilágyi Balázs</List.Item>
              <List.Item as="li">
                <Icon name="envelope" />
                <a href="mailto:zyxneo@gmail.com">zyxneo@gmail.com</a>
              </List.Item>
              <List.Item as="li">
                <Icon name="linkedin" />
                <a href="https://www.linkedin.com/in/bal%C3%A1zs-szil%C3%A1gyi-112987121/">
                  linkedin
                </a>
              </List.Item>
              <List.Item as="li">
                <Icon name="github" />
                <a href="https://github.com/zyxneo">github</a>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="About" />
            <p>
              This is a demonstrational page of development tools, techniques,
              experiments and references.
              <br />
              Built with <a href="https://www.gatsbyjs.org/">Gatsby</a>, Hosted
              on <a href="https://pages.github.com/">GitHub Pages</a> with 💗
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default LayoutFooter;
