import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";

import Login from "./pages/Login";
import Center from "./pages/Center";
import Register from "./pages/Register";

import NotFoundPage from "./pages/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <>
          {/* <Header /> */}

          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/center">
              <Center />
            </Route>

            {/* not found */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
