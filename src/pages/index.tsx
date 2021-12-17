import React from "react";
// import Link from 'gatsby-link'

import { Container, Header, Segment } from "semantic-ui-react";

import Layout from "../components/Layout";
import Matrix from "../components/Matrix";

const IndexPage = () => (
  <Layout className="home">
    <div className="homePage">
      <Matrix />

      <Container></Container>
    </div>
  </Layout>
);

export default IndexPage;
