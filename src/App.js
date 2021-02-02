import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontPage from "./pages/frontPage/FrontPage";
import CustomerPage from "./pages/customerPage/CustomerPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/customers">
          <CustomerPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
