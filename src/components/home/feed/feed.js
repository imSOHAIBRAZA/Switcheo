import React from "react";
import Chat from "../../chat/chat";
import { Col } from "antd";
import {Route, Switch} from "react-router-dom";

import RightBar from "../rightbar/rightbar";
import Booking from "../../booking/booking";

function Feed() {
  return (
    <>
      <Col lg={18}>
        <Switch>
          <Route path="/home/booking-time" component={Booking} />
          <Route path="/home" component={Chat} />
        </Switch>
        {/* <Chat /> */}
        {/* <Booking /> */}
      </Col>
      <Col className="gutter-row" lg={6}>
        <div className="gutter-box rightbar-container">
          <RightBar />
        </div>
      </Col>
    </>
  );
}
export default Feed;
