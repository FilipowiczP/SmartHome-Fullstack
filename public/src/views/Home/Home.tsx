import React from "react";
import { FooterProps } from "../../components/Interfaces/Interface";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import Footer from "../../components/Footer/Footer";

const Home = ({ toggleTheme, themes }: FooterProps) => {
  return (
    <>
      <HomeHeader />
      <Footer toggleTheme={toggleTheme} themes={themes} />
    </>
  );
};

export default Home;
