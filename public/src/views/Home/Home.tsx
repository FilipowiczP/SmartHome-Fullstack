import React from "react";
import { FooterProps } from "../../components/Interfaces/Interface";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import Rooms from "../../components/Rooms/Rooms";
import Footer from "../../components/Footer/Footer";

const Home = ({ toggleTheme, themes }: FooterProps) => {
  return (
    <>
      <HomeHeader />
      <Rooms />
      <Footer toggleTheme={toggleTheme} themes={themes} />
    </>
  );
};

export default Home;
