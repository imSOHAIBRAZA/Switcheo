import React, { Component } from "react";
import "./navigation.css";

import { Steps, Button, message } from "antd";

const { Step } = Steps;

class App extends React.Component {
  render() {
    const { current } = this.props;
    return (
      <div className="mycustumesteper">
        <Steps
          type="navigation"
          size="small"
          current={current}
          className="Steper"
        >
          <Step
            status="finish"
            className={current >= 0 ? "activecustum activeNow" : "activecustum"}
          />
          <Step
            status="finish"
            className={current >= 1 ? "activecustum activeNow" : "activecustum"}
          />
          <Step
            status="finish"
            className={
              current === 2 ? "activecustum activeNow" : "activecustum"
            }
          />
        </Steps>
      </div>
    );
  }
}

export default App;
