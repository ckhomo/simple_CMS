import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Center from "./pages/Center";
import Register from "./pages/Register";
import NotFoundPage from "./pages/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //產生預設值: 2組
  const data = [
    {
      email: "user0@gmail.com",
      created: new Date(),
      password: "user0",
    },
    {
      email: "user1@gmail.com",
      created: new Date(),
      password: "user1",
    },
  ];
  if (localStorage.getItem("list") === null) {
    localStorage.setItem("list", JSON.stringify(data));
  }

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
