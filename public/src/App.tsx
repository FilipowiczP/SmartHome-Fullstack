import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { Theme } from "./theme/global";
import { roomsList } from "./components/API";

import Home from "./views/Home/Home";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [rooms, setRooms] = useState([]);
  const [alertAddNewRoom, setAlertAddNewRoom] = useState("");
  const [turnAllRoom, setTurnAllRoom] = useState(true);

  useEffect(() => {
    roomsList()
      .then((res) => res.json())
      .then((data) => setRooms(data));
    console.log(rooms);
  }, []);

  useEffect(() => {
    roomsList()
      .then((res) => res.json())
      .then((data) => setRooms(data));
    return () => {
      setTurnAllRoom(true);
    };
  }, [alertAddNewRoom, turnAllRoom]);

  const alertNewRoom = () => {
    setAlertAddNewRoom("Added a new room");
    setTimeout(() => {
      setAlertAddNewRoom("");
    }, 2000);
  };

  const toggleRoom = () => {
    setTurnAllRoom(!turnAllRoom);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Theme />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                toggleRoom={toggleRoom}
                toggleTheme={toggleTheme}
                themes={theme}
                alertNewRoom={alertNewRoom}
                alertAddNewRoom={alertAddNewRoom}
                rooms={rooms}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
