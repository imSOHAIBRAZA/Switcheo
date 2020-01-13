import React, { Component } from "react";
import "./userForm.css";
import { Row, Col, Button } from "antd";
import Checkbox from "../utils/checkbox";
export default class userForm extends Component {
 

  render() {
    const {
      basicIncome,
      overTimeEarnedInyear,
      commissionEarnedInYear,
      bonusEarnedInYear,
      guaranteedAllowance,
      otherVariableIncome,
      annualPension,
      basicIncomeDisable,
      overTimeEarnedInyearDisable,
      commissionEarnedInYearDisable,
      bonusEarnedInYearDisable,
      guaranteedAllowanceDisable,
      otherVariableIncomeDisable,
      annualPensionDisable
    } = this.props.allState;

    const {
      onChangeTextSecond,
      onChangeSecond,
      onsubmitForm
    }=this.props.thisObject
    return (
      <div className="fo_2_con">
        <p className="note_text">
          {" "}
          Please try and be as accurate as possible in describing your income,
          Check box if it is not applicable to you
        </p>
        <Row className="formUser-row-gs">
          <Checkbox
            itemName={["basicIncome", basicIncome,basicIncomeDisable]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            What is your basic income?
          </Checkbox>

          <Checkbox
            itemName={["overTimeEarnedInyear", overTimeEarnedInyear,overTimeEarnedInyearDisable]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much overtime do you earn?
          </Checkbox>

          <Checkbox
            itemName={["commissionEarnedInYear", commissionEarnedInYear,commissionEarnedInYearDisable]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much commissions to you earn?
          </Checkbox>

          <Checkbox
            itemName={["bonusEarnedInYear", bonusEarnedInYear,bonusEarnedInYearDisable]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much bonus do you earn?
          </Checkbox>
          <Checkbox
            itemName={["guaranteedAllowance", guaranteedAllowance,guaranteedAllowanceDisable]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            Do to receive a guaranteed allowance ? E.G. car allowance, rent
            allowance
          </Checkbox>
          <Checkbox
            itemName={["otherVariableIncome", otherVariableIncome,otherVariableIncomeDisable]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            Do you any other form of variable income?
          </Checkbox>
          <Checkbox
            itemName={["annualPension", annualPension,annualPensionDisable]}
            onChangeTextSecond={onChangeTextSecond}
            onChangefunc={onChangeSecond}
          >
            How much do you pay into your pension on an annual basis?
          </Checkbox>
          <Col lg={10} offset={11}>
            <div className="btn-div">
              <button onClick={this.props.thisObject.onChangeback} className="btn1">Back</button>
              <Button
                onClick={onsubmitForm}
              className="btn2">Save & Countinue</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
