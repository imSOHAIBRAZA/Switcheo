import React from "react";
import { Row, Col, Collapse } from "antd";
import "./home.css";
import Chat from "../chat/chat";
import LeftBar from "./leftbar/leftbar";
import SearchBar from "./searchbar/searchbar";
import RightBar from "./rightbar/rightbar";
import UserSettings from "../userSettings/userSettings";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Feed from "./feed/feed";
import FinancialHealth from "../financialHealth/getStatetedText/getStartedText";
import GetStarted from "../financialHealth/getStarted/getStarted";
import BackGround from "../financialHealth/backGround/backGround";


import AfterIntial from "../financialHealth/afterintial/"
 
const { Panel } = Collapse;

function Home(props) {
  return (
    <>
      {
        // !props.UserState.user.isVerified&&
        // <Redirect to="/verifymail" />||

        <div>
          <Row gutter={0}>
            <Col className="gutter-row" lg={5}>
              <div className="gutter-box leftbar-container">
                <LeftBar />
              </div>
            </Col>
            <Col className="gutter-row" lg={19}>
              <div className="gutter-box">
                <Row>
                  <Col lg={24}>
                    <SearchBar />
                  </Col>
                  <Switch>
                    <Route exact path="/home/settings" component={UserSettings} />
                    <Route exact path="/home/relatedInformation" component={AfterIntial} />
                    <Route exact path="/home/financial-health" component={FinancialHealth} />
                    <Route exact path="/home/financial-health/get-started" component={GetStarted} />
                    <Route exact path="/home/financial-health/back-ground" component={BackGround} />
                    
                    <Route  path="/home" component={Feed} />
                  </Switch>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      }
    </>
  );
}

const mapStateToProps = state => ({
  UserState: state.userReducer
});

export default connect(mapStateToProps)(Home);
