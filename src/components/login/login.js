import React, { useState } from "react";
import "antd/dist/antd.css";
import "./login.css";
import { Link, withRouter, Redirect,useHistory,useLocation } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
import { login } from "../../redux/Thunk/authThunk";
import { connect } from "react-redux";
import { Formik } from "formik";

import PasswordForgot from "../forgetPassword/forgetPassword"
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    passwordIsValid: false,
    passwordHelp: "",
    passwordValidateStatus: "",

    password: "",
    emailIsValid: false,
    emailHelp: "",
    emailValidateStatus: "",


    remember:false,
    animationToggle:false,
    firstTime:0
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
    }
  };
  const { email, password, remember } = formData;

  const handleChange = e => {
    if (e.target.name === "email" || e.target.name==="password" ) {
        onChangeValidator(e.target.name, e.target.value)
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  };
  const { getFieldDecorator } = props.form;
  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
    console.log(`checked = ${e.target.checked}`);
  }
  const handleSubmit = e => {

    const { email, password, remember } = formData;
    
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
    if (isFormValid) {
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        console.log(values)
        props.loginUser({ email, password, remember });
      }
    });
  } else {
    console.log("Validation Error");
  }
  };

  const togleAnimationFunc=()=>{
    const {animationToggle,firstTime} = formData;
    if(animationToggle){
      setFormData({...formData ,animationToggle:false ,firstTime:firstTime+1})
    }else{
      setFormData({...formData ,animationToggle:true,firstTime:firstTime+1 })
    }
  }
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  return (
    <>
    {!props.UserState.user._id?
        <div className="page-container login page">
          <div className="Login-Container">
            <Row type="flex" justify="center">
              <Col>
                <Row className="innnerContainer">
                  <Col span={24} className="logoStyle">
                    <img className="img" src={logo} />
                  </Col>

                  <Col span={24}>
                    <p>Wellcome back! Please login to your account</p>
                  </Col>
                  <br />
                  <Col span={24}>
                    <div className="">
                      <Row type="flex" justify="center">
                    
                            <Form onSubmit={handleSubmit}>
                              <Col span={24}>
                                {" "}

                          
                               <div>
                               <Form.Item
                              validateStatus={formData.emailValidateStatus}
                              help={formData.emailHelp}
                            >
                                 <Input
                                type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  
                                  placeholder="Email"
                                  className="inputStyle"
                                  prefix={
                                    <Icon
                                      type="mail"
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
                                </div> 
                          
                              </Col>
                              <br />
                              <br />
                              <Col span={24}>
                              {" "}
                              <Form.Item
                              validateStatus={formData.passwordValidateStatus}
                              help={formData.passwordHelp}
                             
                            >
                    <Input.Password
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={e => handleChange(e)}
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
                  <br />
                  <Col span={22}>
                    <span className="handelCheckBoxes">
              
                      <Checkbox onChange={onChange} name="remember" value={remember} >Remember</Checkbox>

                      <span onClick={togleAnimationFunc} >Forget password ?</span>
                    </span>
                  </Col>
                  <br />
                  {/* <Row> */}
                    <Col span={11}>
                      <Button onClick={handleSubmit} id="handelButtonStyle" disabled={!formData.emailIsValid || !formData.passwordIsValid}>
                        Login
                        {/* <Link to="/home"> Login</Link> */}
                      </Button>
                    </Col>
                    <Col span={11}>
                      <Button
                        onClick={() => props.history.push("/")}
                        id="handelButtonRegisterStyle"
                      >
                        Register
                      </Button>
                    </Col>
                  {/* </Row> */}
                </Form>

               </Row>

                <PasswordForgot  firstTime={formData.firstTime} animationHandle ={formData.animationToggle} animationHandler={togleAnimationFunc} />
              </div>
            </Col>
          </Row>
          </Col>
        </Row>
     
      </div>
    </div>
    :
    history.replace(from)
    }
    </>
  );
}
const WrappedRegistrationForm = Form.create({ name: "register" })(Login);

const mapDispatchToProps = (Dispatch,props) => ({
  loginUser: state => Dispatch(login(state,props))
});

const mapStateToProps = state => ({
  UserState: state.userReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(WrappedRegistrationForm));
