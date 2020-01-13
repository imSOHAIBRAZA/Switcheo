import React, {useState} from "react";
import { Row, Col, Collapse, Button } from 'antd';
import {withRouter} from 'react-router-dom'
import './booking.css'
import ChatBox from "./chatBox"
const { Panel } = Collapse;

function Booking(props) {
  const [bookingTime, setBookingTime]= useState("10:00 AM")
  function handleBooking(e){
    setBookingTime(e.target.innerText);
    // var ul1=e.target.parentNode.childNodes;
    var lis1= document.querySelector(".morningTiming").childNodes;
    var lis2= document.querySelector(".anTiming").childNodes;
    var lis3= document.querySelector(".eveTiming").childNodes;
    var ul=[...lis1,...lis2,...lis3]
    for(var i=0 ; i<ul.length ; i++ ){
      if(ul[i].classList.contains("active")){
        ul[i].classList.remove("active");
      }
    }
    e.target.classList.add("active");
  }
  function handleSave(){
    console.log(bookingTime)
    // props.history.push("/home");
  }


  return (

      <div className="booking-section">
        <div className="booking-container">
          <Row>
            <Col lg={12} offset={6}>
              <div className="booking-div">
              <p className="heading-p">Please choose suitable time for call</p>
              <div>
                <fieldset className="booking-fs">
                  <legend>Morning</legend>
                  <ul className="morningTiming">
                    <li className="morning1 active" onClick={(e)=>{handleBooking(e)}} >10:00 AM</li>
                    <li className="morning2" onClick={(e)=>{handleBooking(e)}} >11:00 AM</li>
                    <li className="morning3" onClick={(e)=>{handleBooking(e)}} >12:00 PM</li>
                  </ul>
                </fieldset>
              </div>
              <div>
                <fieldset className="booking-fs">
                  <legend>After Noon</legend>
                  <ul className="anTiming">
                    <li className="an1" onClick={(e)=>{handleBooking(e)}} >01:00 PM</li>
                    <li className="an2" onClick={(e)=>{handleBooking(e)}} >01:00 PM</li>
                    <li className="an3" onClick={(e)=>{handleBooking(e)}} >03:00 PM</li>
                  </ul>
                </fieldset>
              </div>
              <div>
                <fieldset className="booking-fs">
                  <legend>Evening</legend>
                  <ul className="eveTiming">
                    <li className="eve1" onClick={(e)=>{handleBooking(e)}} >04:00 PM</li>
                    <li className="eve2" onClick={(e)=>{handleBooking(e)}} >05:00 PM</li>
                    <li className="eve3" onClick={(e)=>{handleBooking(e)}} >06:00 PM</li>
                  </ul>
                </fieldset>
              </div>
              <div className="booking-btn-div">
                <Button type="primary" onClick={handleSave}>Save</Button>
              </div>
              </div>
            </Col>
          </Row>
          
        </div>
      </div>
    
  );
}
export default withRouter(Booking);
