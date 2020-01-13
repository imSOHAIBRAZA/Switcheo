import React from "react";
// import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, } from "react-router-dom";
import Routing from "./components/router";
function App() {
  return (
    <Router >
        <Routing />
    </Router>
  );
}

export default App;
