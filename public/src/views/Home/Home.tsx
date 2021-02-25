import React from "react";
import { FooterProps } from "../../components/Interfaces/Interface";
import Header from "../../components/homeHeader/homeHeader";
import Footer from "../../components/Footer/Footer";

const Home = ({ toggleTheme, themes }: FooterProps) => {
  return (
    <>
      <Header />
      <Footer toggleTheme={toggleTheme} themes={themes} />
    </>
  );
};

export default Home;
