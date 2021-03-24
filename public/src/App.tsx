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
    console.log(rooms);
  }, [alertAddNewRoom]);

  const alertNewRoom = () => {
    setAlertAddNewRoom("Added a new room");
    setTimeout(() => {
      setAlertAddNewRoom("");
    }, 2000);
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
