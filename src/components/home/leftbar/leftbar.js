import React from "react";
import { Menu, Icon } from "antd";
import { withRouter ,Link} from "react-router-dom";
import "./leftbar.css";

const { SubMenu } = Menu;

class LeftBar extends React.Component {
  handleClick = e => {
    console.log("click in menu ", e);
  };
  handleRoute = route => {
    this.props.history.push(route);
  };
  render() {
    return (
      <div>
        <div className="logo">
          <img src="images/home/logo.png" alt="logo" />
        </div>
        <Menu
          className="leftbar-menu"
          onClick={this.handleClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="1" onClick={() => this.handleRoute("/home")} >
            <span className="menu-icon">
              <img src="images/home/icons/feed_icon.png" />
            </span>
            <p> Feed</p>
          </Menu.Item>
          <span className="connector"></span>
          <Menu.Item key="2" 
          // className="lb" 
          onClick={()=>{this.handleRoute("/home/financial-health")}}
          >
          {/* <Link to="/home/financial-health"> */}
            <span className="menu-icon" >
              <img src="images/home/icons/financial_icon.png" />
            </span>
            <p className="lb">
              Your Financial
              <br />
              Health Check
            </p>
          {/* </Link> */}
          </Menu.Item>
          <span className="connector"></span>
          <Menu.Item key="3" className="lb">          >
            <span className="menu-icon">
              <img src="images/home/icons/details_icon.png" />
            </span>
            <p className="lb">
              Details on <br /> what you need
            </p>
          </Menu.Item>
          <span className="connector"></span>
          <Menu.Item key="4">
            <span className="menu-icon">
              <img src="images/home/icons/document_icon.png" />
            </span>
            <p>Your Documentation</p>
          </Menu.Item>
          <span className="connector"></span>
          <Menu.Item key="5">
            <span className="menu-icon">
              <img src="images/home/icons/chat_icon.png" />
            </span>
            <p>Chat to an expert</p>
          </Menu.Item>
          <span className="connector"></span>
          <Menu.Item key="6">
            <span className="menu-icon">
              <img src="images/home/icons/mortgage_icon.png" />
            </span>
            <p>Your Recommendation</p>
          </Menu.Item>
          <span className="connector"></span>
          <Menu.Item key="7" className="lb">
            <span className="menu-icon">
              <img src="images/home/icons/mortgage_icon.png" />
            </span>
            <p className="lb">
              Your Mortgage <br /> Application
            </p>
          </Menu.Item>
          <span className="connector"></span>
          <Menu.Item key="8">
            <span className="menu-icon">
              <img src="images/home/icons/mortgage_icon.png" />
            </span>
            <p>Your Life insurance</p>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default withRouter(LeftBar);
