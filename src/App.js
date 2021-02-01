import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontPage from "./pages/frontPage/FrontPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
