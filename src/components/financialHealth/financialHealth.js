import React, { useState } from "react";
import { Row, Col } from "antd";
import { Route } from "react-router-dom";
import "./financialHealth.css";
import GetStarted from "./getStarted/getStarted";
import GetStartedText from "./getStatetedText/getStartedText";
import BackGround from "./backGround/backGround";
import YourResult from "./result/result";


function FinancialHealth(props) {


  return (
    <Col lg={24} >
   
      <Route exact path="/home/financial-health/result" component={YourResult} />
      <Route exact path="/home/financial-health/get-started" component={GetStarted} />
      <Route exact={true} path="/home/financial-health/back-ground" component={BackGround} />
      <Route exact path="/home/financial-health" component={GetStartedText} />
    </Col>

  );
}
export default FinancialHealth;