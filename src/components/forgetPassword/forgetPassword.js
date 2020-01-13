import React, { useState } from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Link } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
import { Formik } from "formik";
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ForgetPassword(props) {
  const [formData, setFormData] = useState({
    email: "",
    emailIsValid: false,
    emailHelp: "",
    emailValidateStatus: "",
  });

  const onChangeValidator = (name, value) => {
    switch (name) {
  
      case "email":
        if (!emailPattern.test(value)) {
          setFormData({
            ...formData,
            [name]:value,
            emailValidateStatus: "error",
            emailHelp: "Enter a valid Email address!",
            emailIsValid: false
          });
        } else {
          setFormData({
       ...formData,
            [name]:value,
            emailValidateStatus: "success",
            emailHelp: "",
            emailIsValid: true
          });
        }
        break;
    }
  };
  const { email,  } = formData;
  const handleChange = e => {
    onChangeValidator(e.target.name, e.target.value)
  };

  const handleSubmit = e => {
    console.log(formData);
    props.animationHandler()  //to down the animation
    e.preventDefault();
    // props.form.validateFieldsAndScroll((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //   }
    // });
  };
  return (
    <div  className={props.animationHandle? "forgotAnimationOn":props.firstTime? "forgotAnimationOff":"asdfasdf"}  >
    <div className="page-container forgerPassword page">
      <Row type="flex" justify="center" className="inner-Container">
        {/* <Col span={12}> */}
        <Row className="innnerContainer">
          <Col span={24} className="logoStyle">
            <img className="img" src={logo} />
          </Col>

          <Col span={24}>
            <p>
              Forget Password?
              <br />
              Please provide us your Email to send <br />
              verification email
            </p>
          </Col>
          <Col span={24} className="forgotInputCon">
            <Row type="flex" justify="center">
              {/* <div className="formControl"> */}
              <Form onSubmit={handleSubmit}>
                <div style={{    width:" 277px",  height: '45px',}}>
                <Col span={24}>
                <Form.Item
                              validateStatus={formData.emailValidateStatus}
                              help={formData.emailHelp}
                            >
                  <Input
                    placeholder="Email"
                    // className="inputStyle"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => handleChange(e)}
                    prefix={<Icon type="mail" style={{color: 'white' , fontWeight:'bold',textIndent:'10px', fontSize:'15px'}} />}
                  />
                  </Form.Item>
                </Col>

                <Col span={22}>
                  <Button
                    onClick={handleSubmit}
                    className="handelButtonRegisterStyle againStyle"
                  >
                    <Link > Reset Password</Link>
                  </Button>
                </Col>

                <Col onClick={handleSubmit} span={22} className="notnowBtn">
                
                    <div > Not Now!</div>
                 
                </Col>
                </div>
                
              </Form>
              {/* </div> */}
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
    </div>
  );
}
export default ForgetPassword;
