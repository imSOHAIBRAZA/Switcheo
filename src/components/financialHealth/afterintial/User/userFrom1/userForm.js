import React, { Component } from "react";
import "./userForm.css";
import SelectBoxa from "../utils/Selectbox";
import { Row, Col, Select, Button ,DatePicker} from "antd";
import moment from "moment"
const { Option } = Select;
class UserForm extends Component {
  
  render() {
    const {
      maritalStatus,
      maritalStatusOptions,
      selfEmployedOrPaye,
      childrenFinanciallyDependent,
      childrenFinanciallyDependentOptions,
      publicOrPrivateSector,
      selfEmployedOrPayeOptions,
      
      dateOfBirth
    } = this.props.allState;
    return (
      <div className="fo_1_con">
        <Row className="fh-row-gs">
          <Col lg={24} className="col2">
            <p className="heading3">What is your merital status?</p>
          </Col>
          <Col lg={24} className="q1">
            <SelectBoxa
              valueItem={maritalStatus}
              optionsItem={maritalStatusOptions}
              handlebedFunc={this.props.thisObject.handleMerital}
            />
          </Col>
          <Col lg={24} className="col2">
            <p className="heading3">What is your date of birth?</p>
          </Col>
          <Col lg={24} className="q1">
     <div className="datepic">
            <DatePicker 
            className={
              dateOfBirth
                ? "radio-container container_malta"
                : "radio-container"
            }
             onChange={this.props.thisObject.onChangeDate}  defaultValue={moment(dateOfBirth)} />
            </div>
          </Col>
          <Col lg={24} className="col2">
            <p className="heading3">
              How many children are financially depand on you?
            </p>
          </Col>
          <Col lg={24} className="q1">
            <SelectBoxa
              valueItem={childrenFinanciallyDependent}
              optionsItem={childrenFinanciallyDependentOptions}
              handlebedFunc={this.props.thisObject.handleChild}
            />
          </Col>
          <Col lg="24" className="col2">
            <p className="heading3">
              Do you work in the Public or Private sector?
            </p>
          </Col>
          <Col lg={24} className="q1 posstionChange">
            <div
              onClick={e => this.props.thisObject.clickRadio(e)}
              className={
                publicOrPrivateSector === "Private Sector"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                onChange={e => this.props.thisObject.handleQ(e)}
                type="radio"
                name="publicOrPrivateSector"
                id="private"
                checked={publicOrPrivateSector === "Private Sector"}
                className=""
                value="Private Sector"
              />
              <label for="private">Private</label>
            </div>
            <div
              onClick={this.props.thisObject.clickRadio}
              className={
                publicOrPrivateSector === "Public Sector"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                onChange={e => this.props.thisObject.handleQ(e)}
                type="radio"
                name="publicOrPrivateSector"
                id="public"
                checked={publicOrPrivateSector === "Public Sector"}
                className=""
                value="Public Sector"
              />
              <label for="public">Public</label>
            </div>
          </Col>
          <Col lg={24} className="col2">
            <p className="heading3">What industry are you working in?</p>
          </Col>
          <Col lg={24} className="q1">
            <SelectBoxa
              valueItem={selfEmployedOrPaye}
              optionsItem={selfEmployedOrPayeOptions}
              handlebedFunc={this.props.thisObject.handleWork}
            />
          </Col>
          <Col lg={10} offset={11}>
            <div className="btn-div">
              <button onClick={()=>this.props.thisObject.props.changeProfRout("property")} className="btn1">Back</button>
              <Button
              onClick={this.props.thisObject.onsubmitForm}
                disabled={
                  maritalStatus &&
                  selfEmployedOrPaye &&
                  childrenFinanciallyDependent &&
                  publicOrPrivateSector
                    ? false
                    : true
                }
                className="btn2"
              >
                Save & Countinue
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}


export default (UserForm);
