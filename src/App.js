import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePageBody from "./Components/HomePageBody/HomePageBody";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Navbar />
        <HomePageBody />

        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route  path="*">

        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
