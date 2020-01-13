import React, { Component } from "react";
import "./rightbar.css";
import { Row, Col, Collapse, Icon, Input, Button, Checkbox } from "antd";
// import LogoIcon from "../../assets/Icon-Prototype-Screens (3)/icons/Untitled.jpg";
import LogoIcon from "../../../assets/Icon-Prototype-Screens (3)/icons/Untitled.jpg";
import Calendar from "react-calendar";
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import {SetDay} from "../../../redux/actions/meetingAction/index" 
class RightBar extends Component {
  state = {
    date: new Date()
  };
  onChange = date => this.props.setdate(date);
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };
  handleBooking=()=>{
    if(this.props.setmeeting.appointmentDate)
    {this.props.history.push("/home/booking-time")
  }else{
    alert("please select the day from calender")
  }
  }
  render() {
    return (
      <div className="Main-Container">
        {console.log(this.props.setmeeting)}
        <Row type="flex" justify="center">
          <Col className="InnerContainer" span={24}>
            <img className="imageStyle" src={LogoIcon} />
            <p>
              If you want to speak <br /> to someone call as
            </p>
            <Col span="24">
              <span id="num">
                <Icon
                theme="filled"
                  type="phone"
                  style={{ fontSize: "20px", color: "white" }}
                />
                <p> (01)660 2773</p>
              </span>
            </Col>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col className="SecondInnerContainer"  span={24}>
            <Col  span={24}>
            {/* <div> */}
              <Calendar onChange={this.onChange} value={this.state.date} />
            {/* </div> */}
          </Col>
          <Col span={24} className="cal-tx-bn">
            <p className="cal-text">
              If you want to book  Call or meeting
            </p>
            <Button className="handelButtonStyle" onClick={this.handleBooking}>Book Now</Button>
          </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps=state=>({
  setmeeting:state.setMeeting
})
const mapDitchesToProps=dispatch=>({
  setdate:(data)=>dispatch(SetDay(data))
})
export default connect(mapStateToProps,mapDitchesToProps)(withRouter(RightBar));
