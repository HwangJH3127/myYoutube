import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main" role="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Main;
