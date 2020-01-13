import { Menu, Icon } from "antd";
import React from "react";
import "./navigation.css";
import { connect } from "react-redux";

const { SubMenu } = Menu;

class TopNavigation extends React.Component {
  render() {
    return (
      <div className="topnaivetion_fi">
        <Menu
          // onSelect={({ key }) => this.props.changeProfRoute(key)}
          selectedKeys={[this.props.defaltSet]}
          defaultSelectedKeys={[this.props.defaltSet]}
          mode="horizontal"
        >
          <Menu.Item key="background" className="fi_nav">
            <div className="icon_container">
              <img
                src="images/home/icons/background.png"
                className="fi_icon pngicon"
              />
              <p> BACKGROUND </p>
            </div>
          </Menu.Item>
          <Menu.Item key="property" className="fi_nav">
            <div className="icon_container">
              <img
                src="images/home/icons/mortgage.png"
                className="fi_icon pngicon"
              />

              <p> PROPERTY </p>
            </div>
          </Menu.Item>
          <Menu.Item key="user1"  className="fi_nav">
            <div className="icon_container">
              <img
                src="images/home/icons/Group 856.png"
                className="fi_icon pngicon"
              />

              <p> {this.props.userFirstName} </p>
            </div>
          </Menu.Item>
          {this.props.peopleOnMortgage === "two" && (
            <Menu.Item key="user2" className="fi_nav">
              <div className="icon_container">
                <img
                  src="images/home/icons/Group 856.png"
                  className="fi_icon pngicon"
                />

                <p> {this.props.firstNameSecondApplicant} </p>
              </div>
            </Menu.Item>
          )}
          <Menu.Item key="result" className="fi_nav">
            <div className="icon_container">
              <img
                src="images/home/icons/house-black-silhouette-without-door.png"
                className="fi_icon pngicon lastICon"
              />
              <p> RESULT </p>
            </div>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({
  userReducer: {
    user: { firstName }
  },
  Financial_data: {
    financial_Health_Check: { peopleOnMortgage, firstNameSecondApplicant }
  }
}) => ({
  peopleOnMortgage,
  firstNameSecondApplicant,
  userFirstName: firstName
});

export default connect(mapStateToProps)(TopNavigation);
