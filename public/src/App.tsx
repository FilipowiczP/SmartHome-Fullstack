import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { Background } from "./theme/global";

import Home from "./views/Home/Home";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Background />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home toggleTheme={toggleTheme} themes={theme} />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
