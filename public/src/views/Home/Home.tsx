import React from "react";
import { HomeProps } from "../../components/Interfaces/Interface";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import Rooms from "../../components/Rooms/Rooms";
import Footer from "../../components/Footer/Footer";

const Home = ({
  toggleTheme,
  themes,
  alertNewRoom,
  alertAddNewRoom,
  rooms,
  toggleRoom,
}: HomeProps) => {
  return (
    <>
      <HomeHeader
        alertNewRoom={alertNewRoom}
        alertAddNewRoom={alertAddNewRoom}
      />
      <Rooms rooms={rooms} toggleRoom={toggleRoom} />
      <Footer toggleTheme={toggleTheme} themes={themes} />
    </>
  );
};

export default Home;
