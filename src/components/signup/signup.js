import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SignUp } from "../../redux/Thunk/authThunk";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
import { withRouter, Redirect } from "react-router-dom";
import { Formik } from "formik";
import Password from "antd/lib/input/Password";

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneno = /^\d{10}$/;
function Signup(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",


    email: "",
    emailIsValid: false,
    emailHelp: "",
    emailValidateStatus: "",

    password: "",
    passwordIsValid: false,
    passwordHelp: "",
    passwordValidateStatus: "",

    phone: "",
    phoneIsValid: false,
    phoneHelp: "",
    phoneValidateStatus: "",

    terms: false,
    privacy: false,
    emailsvalidate:true
  });

 const onChangeValidator = (name, value) => {
    switch (name) {
      case "password":
        if (value.trim() === "" || value.length < 5) {
          setFormData({
            ...formData,
            [name]:value,
            passwordValidateStatus: "error",
            passwordHelp: "Enter more than 5 digit password!",
            passwordIsValid: false
          });
        } else {
          setFormData({
            ...formData,
            [name]:value,
            passwordValidateStatus: "success",
            passwordHelp: "",
            passwordIsValid: true
          });
        }
        break;
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

        case "phone":
          if (!phoneno.test(value)) {
            setFormData({
              ...formData,
              [name]:value,
              phoneValidateStatus: "error",
            phoneHelp: "Enter a phone Number!",
              phoneIsValid: false
            });
          } else {
            setFormData({
         ...formData,
              [name]:value,
              phoneValidateStatus: "success",
              phoneHelp: "",
              phoneIsValid: true
            });
          }
          break;
    }
 
  };


  const handleChange = e => {
  
    if (e.target.name === "email" || e.target.name==="password" || e.target.name==="phone" ) {
        onChangeValidator(e.target.name, e.target.value)
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  };
  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
    console.log(`checked = ${e.target.checked}`);
  }
  const handleSubmit = e => {

    e.preventDefault();
    let isFormValid = true;
    if (!formData.emailIsValid) {
      isFormValid = false;
      setFormData({
        emailValidateStatus: "error",
        emailHelp: "Enter your Email !"
      });
    }

    if (!formData.passwordIsValid) {
      isFormValid = false;
      setFormData({
        passwordIsValid: false,
        passwordHelp: "Enter your password !",
        passwordValidateStatus: "error"
      });
    }

    if (!formData.phoneIsValid) {
      isFormValid = false;
      setFormData({
        phoneIsValid: false,
        phoneHelp: "Enter your correct Number !",
        phoneValidateStatus: "error"
      });
    }

    if (isFormValid) {
      const { email, password,  firstName,  lastName ,phone,terms, privacy  } = formData;
      props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received formData of form: ", values);
          props.SignUp({ email, password,  firstName, phone, lastName ,terms, privacy});
        }
      });
    } else {
      console.log("Validation Error");
    }
  };

  // if(props.UserState){
  //   return props.history.push("/home")
  // }
  // else {
     return (
    <>
    {!props.UserState.user._id?
       <div className="page-container signup page">
          <div className="Signup-Container">
            <Row type="flex" justify="center">
              <Col span={8}>
                <Row className="innnerContainer" type="flex" justify="center">
                  <Col span={24} className="logoStyle">
                    <img className="img" src={logo} />
                  </Col>
                  <Col span={24}>
                    <p>Please complete to create your account</p>
                  </Col>
                  <Col span={24}>
                    <div>
                   
                          <Form onSubmit={handleSubmit}>
                            <Row type="flex" justify="center">
                              <Col span={8}>
                                <Input
                                  placeholder="First name"
                                  name="firstName"
                                  value={formData.firstName}
                                  // onChange={e => handleChange(e)}
                          
                                  onChange={handleChange}
                                  value={formData.firstName}
                                  prefix={
                                    <Icon
                                      type="user"
                                      style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        textIndent: "10px",
                                        fontSize: "15px"
                                      }}
                                    />
                                  }
                                />
                               
                              </Col>
                              <Col span={8}>
                                {" "}
                                <Input
                                  placeholder="Last name"
                                  name="lastName"
                                  value={formData.lastName}
                                  // onChange={e => handleChange(e)}
                                  onChange={handleChange}
                                  value={formData.lastName}
                                  prefix={
                                    <Icon
                                      type="lock"
                                      style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        textIndent: "10px",
                                        fontSize: "15px"
                                      }}
                                    />
                                  }
                                />
                               
                              </Col>
                              <Col span={16}>
                                {" "}
                                <Form.Item
                              validateStatus={formData.emailValidateStatus}
                              help={formData.emailHelp}
                            >
                                <Input
                                  placeholder="Email"
                                  name="email"
                                  type="email"
                                  value={formData.email}
                                  // onChange={e => handleChange(e)}
                                  onChange={handleChange}
                                  value={formData.email}
                          
                                  prefix={
                                    <Icon
                                      type="mail"
                                      style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        textIndent: "10px",
                                        fontSize: "15px",
                                        marginTop:"10px"
                                      }}
                                    />
                                  }
                                />
                                  </Form.Item>
                              </Col>
                              <Col span={16}>
                                {" "}
                                <Form.Item
                              validateStatus={formData.passwordValidateStatus}
                              help={formData.passwordHelp}
                             
                            >
                        
                                <Input.Password
                                  placeholder="Password"
                                  name="password"
                                  value={formData.password}
                                  type="password"
                                  onChange={e => handleChange(e)}
                                  value={formData.password}
                                  prefix={
                                    <Icon
                                      type="lock"
                                      style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        textIndent: "10px",
                                        fontSize: "15px"
                                      }}
                                    />
                                  }
                                />
                              </Form.Item>
                              </Col>{" "}
                              <br />
                              <Col span={16}>
                                {" "}
                                <Form.Item
                              validateStatus={formData.phoneValidateStatus}
                              help={formData.phoneHelp}
                             
                            >
                                <Input
                                  placeholder="Phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={e => handleChange(e)}
                                  value={formData.phone}
                                  prefix={
                                    <Icon
                                      type="phone"
                                      style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        textIndent: "10px",
                                        fontSize: "15px"
                                      }}
                                    />
                                  }
                                />
                                </Form.Item>
                              </Col>
                              <Col span={16}>
                                <span className="handelCheckBoxes">
                                  <Checkbox
                                    onChange={onChange}
                                    value={formData.terms}
                                    name="terms"
                                  >
                                    Term of Business and Privacy Policy
                                  </Checkbox>
                                </span>
                              </Col>
                              <Col span={16}>
                                <span className="handelCheckBoxes">
                                  <Checkbox
                                    onChange={onChange}
                                    name="privacy"
                                    value={formData.privacy}
                                  >
                                    Have You Read and agree with our Terms or
                                    <br />
                                    business and Privacy Polices?
                                  </Checkbox>
                                </span>
                              </Col>
                              <Col span={20}>
                                <Button
                                  onClick={handleSubmit}
                                  className="handelButtonStyle"
                                  disabled={
                                    formData.terms && formData.privacy 
                                      ? false
                                      : true
                                  }
                                >
                                  {formData.terms}Register
                                </Button>
                              </Col>
                            </Row>
                          </Form>
                       
                      <Col span={20}>
                        Already have a account?{" "}
                        <Link to="/login">Login Here</Link>
                      </Col>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>:
        props.history.push("/home")}
    </>
  );
  }
// }
const WrappedRegistrationForm = Form.create({ name: "register" })(Signup);
const mapDispatchToProps = (Dispatch,props) => ({
  SignUp: state => Dispatch(SignUp(state,props))
});

const mapStateToProps = state => ({
  UserState: state.userReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WrappedRegistrationForm));
