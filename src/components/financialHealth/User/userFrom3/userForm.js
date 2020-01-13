import React, { Component } from "react";
import "./userForm.css";
import { Row, Col } from "antd";
import Checkbox from "../utils/checkbox";
export default class userForm extends Component {
  render() {
    const {
      nusrseryOrChildminding,
      nusrseryOrChildmindingDisable,
      spousalMaintenanceCosts,
      spousalMaintenanceCostsDisable,
      monthlyCreditCardCharges,
      monthlyCreditCardChargesDisable,
      overDraftLimit,
      overDraftLimitDisable,
      creditCardLimit,
      creditCardLimitDisable,
      overDraftCharges,
      overDraftChargesDisable,
      monthlyLoanRepayments,
      monthlyLoanRepaymentsDisable,
      monthlyCashFlow,
      monthlyCashFlowDisable
    } = this.props.allState;
    const {
      onChangeTextSecond,
      onChangeSecond,
      onsubmitForm
    } = this.props.thisObject;
    return (
      <div className="fo_2_con">
        <p className="note_text">
          {" "}
          Please try and be as accurate as possible in describing your income,
          Check box if it is not applicable to you
        </p>
        <Row className="formUser-row-gs">
          <Checkbox
            itemName={[
              "nusrseryOrChildminding",
              nusrseryOrChildminding,
              nusrseryOrChildmindingDisable
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in monthly nursery or child minding costs?
          </Checkbox>

          <Checkbox
            itemName={[
              "spousalMaintenanceCosts",
              spousalMaintenanceCosts,
              spousalMaintenanceCostsDisable
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in monthly maintenance costs?
          </Checkbox>

          <Checkbox
            itemName={[
              "creditCardLimit",
              creditCardLimit,
              creditCardLimitDisable
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            What is your total credit card limit?
          </Checkbox>

          <Checkbox
            itemName={[
              "monthlyCreditCardCharges",
              monthlyCreditCardCharges,
              monthlyCreditCardChargesDisable
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in monthly credit card charges?
          </Checkbox>
          <Checkbox
            itemName={["overDraftLimit", overDraftLimit, overDraftLimitDisable]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            What is your total overdraft limit?
          </Checkbox>
          <Checkbox
            itemName={[
              "overDraftCharges",
              overDraftCharges,
              overDraftChargesDisable
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in monthly overdarft charges?
          </Checkbox>
          <Checkbox
            itemName={[
              "monthlyLoanRepayments",
              monthlyLoanRepayments,
              monthlyLoanRepaymentsDisable
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay in other monthly loan repayments?
          </Checkbox>
          <Checkbox
            itemName={[
              "monthlyCashFlow",
              monthlyCashFlow,
              monthlyCashFlowDisable
            ]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            Do you have a monthly shortfall from properties you rent?
          </Checkbox>

          <Col lg={10} offset={11}>
            <div className="btn-div">
              <button onClick={this.props.thisObject.onChangeback} className="btn1">Back</button>
          
              <button onClick={onsubmitForm} className="btn2">
                Save & Countinue
              </button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
