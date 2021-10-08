import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Mainpage } from "./Components/Mainpage/Mainpage.jsx";
// import { Dropdawn } from "./Components/Dropdawn/DropdawnOne";
import {path} from "./Paths/paths"

import "./App.scss";
import { Dropdawn } from "./Components/Dropdawn/index.js";

export const App = () => {
  return (
    <BrowserRouter>
      <Route path={path.mainpage} exact component={Mainpage} />
      <Route path={path.dropdawn} exact component={Dropdawn} />
    </BrowserRouter>
  );
};
