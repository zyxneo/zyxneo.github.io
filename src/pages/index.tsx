import React from "react";
// import Link from 'gatsby-link'

import { Container, Header, Segment } from "semantic-ui-react";

import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout className="home">
    <div className="homePage">
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: "1em 0em" }}
        vertical
      >
        <Container text>
          <Header
            as="h1"
            content="Portfolio"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "3em",
            }}
          />
          <Header
            as="h2"
            content="Soon"
            inverted
            style={{ fontSize: "1.7em", fontWeight: "normal" }}
          />
        </Container>
      </Segment>

      <Container></Container>
    </div>
  </Layout>
);

export default IndexPage;
