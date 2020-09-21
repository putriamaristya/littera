import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainComponent from "./Components/MainComponent";
//import CardComponent from "./Components/CardComponent";
import NavbarComponent from "./Components/NavbarComponent";
import NavsideComponent from "./Components/NavsideComponent";

function App() {
  return (
    <Router>
      <Route>
        <div className="Apps">
          <div className="full-height">
            <NavsideComponent />
          </div>
          <div className="full-height main-content">
            <MainComponent />
          </div>
        </div>
      </Route>
    </Router>
  );
}

export default App;
