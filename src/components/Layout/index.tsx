import classNames from "classnames";
import React from "react";
import Helmet from "react-helmet";

import "semantic-ui-css/semantic.min.css";

import Header from "../Header";
import Footer from "../Footer";

import "./index.css";

type Props = {
  children: any;
  className?: string;
};

const Layout = function ({ children, className }: Props) {
  return (
    <div className={classNames("layout", className)}>
      <Helmet
        title="Portfolio"
        meta={[
          {
            name: "description",
            content: "Balázs Szilágyi's portfolio page",
          },
          {
            name: "keywords",
            content: "front-end, frontend, developer, web",
          },
        ]}
      >
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-4516268-13"
        ></script>
        <script type="application/ld+json">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-4516268-13');
            `}</script>
      </Helmet>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
