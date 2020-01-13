import React, { useState } from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Link } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
import { Formik } from "formik";
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function PasswordRestVerification(props) {
  const [formData, setFormData] = useState({
    newPassword: "",
    conformPassword: ""
  });
  const { newPassword, conformPassword } = formData;
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log(formData);
    e.preventDefault();
    // props.form.validateFieldsAndScroll((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //   }
    // });
  };

  return (
    <>
      {/* {!props.UserState.user._id? */}
      <div className="page-container login page">
        <div className="Login-Container">
          <Row type="flex" justify="center">
            <Col>
              <Row className="innnerContainer">
                <Col span={24} className="logoStyle">
                  <img className="img" src={logo} />
                </Col>

                <Col span={24}>
                  <p>
                    Forget Password?
                    <br />
                    Please Provide us your email to send
                    <br />
                    verification email
                  </p>
                </Col>
                <br />
                <Col span={24}>
                  <div className="">
                    <Row type="flex" justify="center">
                      <Form onSubmit={handleSubmit}>
                        <Col span={18} id="handel-input">
                          {" "}
                          <Form.Item
                            validateStatus={formData.passwordValidateStatus}
                            help={formData.emailHelp}
                          >
                            <Input
                              placeholder="email"
                              // className="inputStyle"
                              name="newPassword"
                              value={newPassword}
                              onChange={e => handleChange(e)}
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
                        </Col>

                        <Col span={22}>
                          <Button
                            onClick={handleSubmit}
                            id="handelButtonRegisterStyle"
                            // disabled={
                            //   !formData.emailIsValid ||
                            //   !formData.passwordIsValid
                            // }
                          >
                            <Link to="/registrationSuccessfully">
                              {" "}
                              Reset Password
                            </Link>
                          </Button>
                        </Col>
                      </Form>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  PasswordRestVerification
);
export default WrappedRegistrationForm;