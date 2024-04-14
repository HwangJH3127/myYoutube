import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Main = (props) => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Hwangs Web"
        defaultTitle="Hwangs Youtube"
        defer={false}
      >
        {props.title && <title>{props.title}</title>}
      </Helmet>

      <Header />
      <main id="main" role="main">
        {props.schildren}
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Main;
