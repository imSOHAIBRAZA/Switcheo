import React from "react";
import { Row, Menu, Col, Select, Button, Steps, Checkbox } from "antd";
import "./property.css";
import { connect } from "react-redux";
import Api from "../../../../redux/api/financialHealthCheck";
import SelectBox from "../User/utils/Selectbox";
const { Option } = Select;
const { Step } = Steps;

class Property extends React.Component {
  state = {
    userId: "",
    typeOfProperty: "",
    typeOfPropertyValidation: "",
    typeOfPropertyHelp: "",
    typeOfPropertyValidationStatus: "error",

    howManyBedrooms: "One Bed Room",
    howManyBedroomsOption: ["One Bedroom", "Two Bedrooms", "More Than Two"],

    valueOfProperty: "",
    propertyLocation: "Urban",
    propertyLocationOption: ["Urban", "Other"],

    sizeOfMortgage: undefined,
    yearsToPayOffMortgage: undefined
  };
  clickRadio(e) {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  }
  validateRadio = (name, value) => {
    switch (name) {
      case "typeOfProperty":
        if (value === "") {
          this.setState({
            [name]: value,
            [`${name}Validation`]: "error",
            [`${name}Help`]: "please Select one of above",
            [`${name}ValidationStatus`]: false
          });
        } else {
          this.setState({
            [name]: value,
            [`${name}Validation`]: "success",
            [`${name}Help`]: "",
            [`${name}ValidationStatus`]: true,
            howManyBedrooms: "Two Bedrooms",
            valueOfProperty: 250000,
            propertyLocation: "Urban"
          });
        }
        break;
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.financial_Property.typeOfProperty &&
      nextProps.financial_Property.typeOfProperty !== "" &&
      prevState.howManyBedrooms !==
        nextProps.financial_Property.howManyBedrooms &&
      prevState.userId !== nextProps.userId
    ) {
      const {
        typeOfProperty,
        howManyBedrooms,
        valueOfProperty,
        propertyLocation,
        sizeOfMortgage,
        yearsToPayOffMortgage
      } = nextProps.financial_Property;
      const { userId } = nextProps;
      return {
        ...prevState,
        userId,
        typeOfProperty: typeOfProperty,
        howManyBedrooms: howManyBedrooms,
        valueOfProperty: valueOfProperty,
        propertyLocation: propertyLocation,
        sizeOfMortgage: sizeOfMortgage,
        yearsToPayOffMortgage: yearsToPayOffMortgage,
        typeOfPropertyValidation: "success",
        typeOfPropertyHelp: "",
        typeOfPropertyValidationStatus: true
      };
    }
    return prevState;
  }
  onchangeInput = e => {
    var reg = /^-?\d*\.?\d*$/;

    if (reg.test(e.target.value)) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  handlelocation = value => {
    this.setState({
      propertyLocation: value
    });
  };
  handlebed = value => {
    this.setState({
      howManyBedrooms: value
    });
  };
  handlepay = value => {
    this.setState({
      yearsToPayOffMortgage: value
    });
  };
  handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    this.validateRadio(e.target.name, e.target.value);
    // this.setState({[e.target.name]:e.target.value})
    for (var i = 0; i < radioContainers.length; i++) {
      var input = radioContainers[i].childNodes[0];
      if (input.checked) {
        input.parentNode.style.background = "#fb9500";
        input.parentNode.style.border = " 2px solid #fb9500";
      } else {
        input.parentNode.style.background = "lightgray";
        input.parentNode.style.border = " 2px solid lightgray";
      }
    }
  };
  onsubmitForm = () => {
    let {
      typeOfProperty,
      howManyBedrooms,
      valueOfProperty,
      propertyLocation,
      sizeOfMortgage,
      yearsToPayOffMortgage
    } = this.state;

    valueOfProperty = parseInt(valueOfProperty);
    sizeOfMortgage = parseInt(sizeOfMortgage);
    const newValues = {
      typeOfProperty,
      howManyBedrooms,
      valueOfProperty: parseInt(valueOfProperty),
      propertyLocation,
      sizeOfMortgage: parseInt(sizeOfMortgage),
      yearsToPayOffMortgage
    };
    this.props.set_financial_BackGround(
      {
        userId: this.props.userId,
        applicants: {
          ...this.props.financial_Property,
          ...newValues
        }
      },
      this.callbackFunc
    );
  };
  callbackFunc = () => {
    this.props.changeProfRout("user1");
  };
  render() {
    const {
      typeOfProperty,
      howManyBedrooms,
      howManyBedroomsOption,
      propertyLocationOption,
      valueOfProperty,
      propertyLocation,
      sizeOfMortgage,
      yearsToPayOffMortgage
    } = this.state;
    return (
      <div className="property_conpe">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="mycustumesteper"
            style={{ marginTop: "-30px", marginBottom: "10px", width: "150px" }}
          >
            <Steps type="navigation" size="small" className="Stepermy">
              <Step status="finish" className="activeNow" />
            </Steps>
          </div>
        </div>
        <Row className="fh-row-gs">
          <Col lg="24" className="col2">
            <p className="heading3">What type of property?</p>
          </Col>
          <Col lg={24} className="q1">
            <div
              onClick={e => this.clickRadio(e)}
              className={
                typeOfProperty === "Apartment"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                onChange={e => this.handleQ(e)}
                type="radio"
                name="typeOfProperty"
                id="apartment"
                checked={typeOfProperty === "Apartment"}
                className=""
                value="Apartment"
              />
              <label for="apartment">Apartment</label>
            </div>
            <div
              onClick={this.clickRadio}
              className={
                typeOfProperty === "House"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                onChange={e => this.handleQ(e)}
                type="radio"
                checked={typeOfProperty === "House"}
                name="typeOfProperty"
                id="house"
                className=""
                value="House"
              />
              <label for="house">House</label>
            </div>
          </Col>
          <Col lg={24} className="col2">
            <p className="heading3">how many badrooms?</p>
          </Col>
          <Col lg={24} className="q1">
            <Select
              className={
                typeOfProperty !== "" ? "selectPRo maltaback" : "selectPRo "
              }
              name={howManyBedrooms}
              defaultValue={
                howManyBedrooms === "" ? "Select Option " : howManyBedrooms
              }
              onChange={this.handlebed}
              size="large"
            >
              {howManyBedroomsOption.map((item, key) => (
                <Option value={item} key={key}>
                  {item}
                </Option>
              ))}
            </Select>
          </Col>
          <Col lg={24} className="col3">
            <p className="heading3">What is the value of Property?</p>
          </Col>
          <Col lg={24} className="q1 q3">
            <div
              className={typeOfProperty !== "" ? "input maltaback" : "input"}
            >
              <input
                type="text"
                name="valueOfProperty"
                onChange={this.onchangeInput}
                value={valueOfProperty}
                placeholder="10000"
              />
            </div>
          </Col>
          <Col lg={24} className="col2">
            <p className="heading3">where it is located?</p>
          </Col>
          <Col lg={24} className="q1">
            <Select
              className={
                typeOfProperty !== "" ? "selectPRo maltaback" : "selectPRo "
              }
              name={propertyLocation}
              defaultValue={
                propertyLocation === "" ? "Select Option " : propertyLocation
              }
              onChange={this.handlelocation}
              size="large"
            >
              {this.state.propertyLocationOption.map((item, key) => (
                <Option value={item} key={key}>
                  {item}
                </Option>
              ))}
            </Select>
          </Col>
          <Col lg={24} className="col3">
            <p className="heading3">
              What is the size of mortgage are you looking for?
            </p>
          </Col>
          <Col lg={24} className="q1 q3">
            <div
              className={typeOfProperty !== "" ? "input maltaborder" : "input"}
            >
              <input
                type="text"
                name="sizeOfMortgage"
                onChange={this.onchangeInput}
                value={sizeOfMortgage}
                placeholder="10000"
              />
            </div>
          </Col>
          <Col lg={24} className="col2">
            <p className="heading3">
              How many years do you want to pay off your mortgage?
            </p>
          </Col>
          <Col lg={24} className="q1">
            <Select
              onChange={this.handlepay}
              style={{ width: 200 }}
              className="selectPRo"
              size="large"
              defaultValue={
                yearsToPayOffMortgage === ""
                  ? "select Option "
                  : yearsToPayOffMortgage
              }
              className={
                typeOfProperty !== "" ? "selectPRo borderRed" : "selectPRo"
              }
            >
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
            </Select>
          </Col>
          <Col lg={10} offset={11}>
            <div className="btn-div">
              <Button
                onClick={this.onsubmitForm}
                loading={this.props.financial_data.loading}
                disabled={
                  typeOfProperty &&
                  valueOfProperty &&
                  sizeOfMortgage &&
                  yearsToPayOffMortgage
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
const mapStateToProps = ({
  userReducer: {
    user: { _id }
  },
  Financial_data: { loading, error, modal, financial_Health_Check }
}) => ({
  financial_data: { loading, error, modal },
  financial_Property: financial_Health_Check,
  userId: _id
});

const mapDispatchToProps = dispacth => ({
  set_financial_BackGround: (props, callback) =>
    dispacth(Api.financialDataPost(props, callback))
});
export default connect(mapStateToProps, mapDispatchToProps)(Property);
