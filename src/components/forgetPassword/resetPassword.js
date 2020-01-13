import React, {useState} from "react";
import "antd/dist/antd.css";
import './style.css';
import { Link } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
function ResetPassword(props) {
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
    <div className="page-container forgerPassword page">
      <Row type="flex" justify="center" className="inner-Container">
        <Row className="innnerContainer">
          <Col span={24} className="logoStyle">
            <img className="img" src={logo} />
          </Col>

          <Col span={24}>
            <p>Please Enter Your new Password</p>
          </Col>
          <br />
          <Col span={24}>
            <Row type="flex" justify="center">
              <Form onSubmit={handleSubmit}>
                <Col span={24}>
                  <Input
                    placeholder="new password"
                    // className="inputStyle"
                    name="newPassword"
                    value={newPassword}
                    onChange={e => handleChange(e)}
                    prefix={<Icon type="mail" style={{color: 'white' , fontWeight:'bold',textIndent:'10px', fontSize:'15px' }} />}
                  />
                </Col>
                <br/><br/>
                <Col span={24}>
                  <Input
                    placeholder="Conform password"
                    // className="inputStyle"
                    name="conformPassword"
                    value={conformPassword}
                    onChange={e => handleChange(e)}
                    prefix={<Icon type="mail" style={{ color: 'white' , fontWeight:'bold',textIndent:'10px', fontSize:'15px' }} />}
                  />
                </Col>

                <Col span={22}>
                  <Button onClick={handleSubmit} className="handelButtonRegisterStyle">
                    Reset password
                  </Button>
                </Col>
              </Form>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
export default ResetPassword;
