import React, { Component } from "react";
import TopNavigation from "./topnavigation/topNavigation"
import Result from "../result/result"
import Property from "./property/index"
import User1 from "./User/index"
import User2 from "./User/secodeApplication" 
import Background from "../getStarted/getStarted"


 export class index extends Component {
     state={
        selectedKey:"property"
     }

    changeProfRoute = key => this.setState({ selectedKey: key });

    profRouteRenderer = () => {
        const { selectedKey } = this.state;
        if (selectedKey === "background") return <Background  present={true} changeProfRout={this.changeProfRoute} />;
        if (selectedKey === "property") return <Property  changeProfRout={this.changeProfRoute}  />;
        if (selectedKey === "user1") return <User1  changeProfRout={this.changeProfRoute} />;
        if (selectedKey === "user2") return <User2  changeProfRout={this.changeProfRoute}  />;
        if (selectedKey === "result") return <Result  />;
    
      };

  render() {
    return (
      <div>
        <div className="chat-section">
          <div className="chat-container">
          <TopNavigation defaltSet={this.state.selectedKey} changeProfRoute={this.changeProfRoute}  />
        <div>
        {this.profRouteRenderer()}
        
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
