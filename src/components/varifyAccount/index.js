import React, { useState } from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Link ,useLocation,useHistory} from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
import {connect} from "react-redux";
import {resendEmail} from "../../redux/Thunk/authThunk/index"

function RegistrationSuccessfully(props) {
  const [formData, setFormData] = useState({
    disabled:false,
    disabledText:"Try Again In ",
    retryTime:60
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.ResendEmail(props.UserState.user.email)
    setFormData({...formData,disabled:true})
    const counter=setInterval(()=>{
      if(formData.retryTime==0)
      {
        setFormData({...formData,disabled:false,retryTime:60});
        clearInterval(counter)
      }
      else
      setFormData({...formData,retryTime:formData.retryTime--,disabled:true})
    },1000)
    // counter();
    // props.form.validateFieldsAndScroll((err, values) => {
    //   if (!err) {
    //     console.log("Received values of form: ", values);
    //   }
    // });
  };
const {UserState}=props;
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
console.log(formData.retryTime,formData.disabled)
  return (
    <>
      {!props.UserState.user.isVerified?
      <div className="page-container login page">
        <div className="Login-Container">
          <Row type="flex" justify="center">
            <Col>
              <Row className="innnerContainer">
                <Col span={24} className="logoStyle">
                  <img className="img" src={logo} />
                </Col>

                <Col span={24}>
                  <h2 id="account-success">
                    Account Created
                    <br />
                    Successfully{" "}
                  </h2>
                </Col>
                <br />
                <Col span={24}>
                  <div className="">
                    <Row type="flex" justify="center">
                      <Form >
                        <Col span={24}>
                          <p>
                            Please activate your account
                            <br />
                            by verifing the email we sent on
                            <br />
                            {UserState.user.email}
                          </p>
                          <br />
                          <a id="link-not-send">Not received any email?</a>
                        </Col>
                        <br />
                        <br />
                        <Col span={24}>
                          <Button
                            onClick={handleSubmit}
                            id="handelButtonStyle"
                            disabled={
                              formData.disabled
                            }
                         style={formData.disabled&&{height:"50px"}||{}}
                          >
                            Resend
                            <br/>
                            {
                              formData.disabled&&
                              `(${formData.disabledText}${formData.retryTime})`
                            }
                          </Button>
                        </Col>{" "}
                     
                      </Form>
                    </Row>

                    {/* <PasswordForgot  firstTime={formData.firstTime} animationHandle ={formData.animationToggle} animationHandler={togleAnimationFunc} /> */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
     :(
       history.replace(from)
     )}
    </>
  );
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationSuccessfully
);
const mapDispatchToProps = (Dispatch,props) => ({
  ResendEmail: state => Dispatch(resendEmail(state))
});
const mapStateToProps = state => ({
  UserState: state.userReducer
});
export default connect(mapStateToProps,mapDispatchToProps)(WrappedRegistrationForm);