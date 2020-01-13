import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Icon, Button, Modal, Row, Col } from 'antd';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUser } from "../../../redux/Thunk/authThunk/index";
import './searchbar.css'

function SearchBar(props) {
  useEffect(() => {
    setUser(props.UserState.user)
  }, [props.UserState])
  const [user, setUser] = useState(props.UserState.user)
  const logOut = () => {
    props.DeleteUser(props)
  }
  const menu = (
    <Menu className="dd-menu">
      <Menu.Item key="0" onClick={() => props.history.push("/home/settings")}>
        <span className="settings fas fa-cogs"></span>
        <span className="text">Settings</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={logOut}>
        <span className="logout fas fa-power-off"></span>
        <span className="text" >Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="top-search-bar-div">
        <Row>
          <Col lg={17}>
            <div className="search-input">
              <div className="search-icon">
                <Icon type="search" />
              </div>
              <div className="input">
                <input type="text" placeholder="Search here" />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="notification-icon">
              <img src="images/home/icons/notification.png" alt="notification" />
            </div>
          </Col>
          <Col lg={5} >
            <div className="profile-dropdown">

              <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <span className="ant-dropdown-link" href="#">
                  <span className="profile-pic">
                    <img src={`${window.baseurl}/static/`+user.image} alt="profile" />
                  </span>
                  <p className="username"><p>{`${user.firstName} ${user.lastName}`}</p><br />
                    <p>{`${user.email}`}</p>
                    <i className="fas fa-angle-down" /></p>
                </span>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  UserState: state.userReducer
});
const mapDispatchToProps = (Dispatch) => (
  {
    DeleteUser: props => Dispatch(deleteUser(props))
  })
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));


