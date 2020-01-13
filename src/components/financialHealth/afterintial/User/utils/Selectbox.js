import React from "react";
import { Select } from "antd";
const { Option } = Select;

class Selectbox extends React.Component {
  state = {
    typeOfProperty: "",
    valueItem: "",
    handlebedFunc: "",
    optionsItem: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.valueItem && nextProps.valueItem) {
      return {
        ...prevState,
        typeOfProperty: nextProps.typeOfProperty,
        valueItem: nextProps.valueItem,
        handlebedFunc: nextProps.handlebedFunc,
        optionsItem:nextProps.optionsItem
      };
    }
    return prevState;
  }

  render() {
    return (
      <Select
        className={
          this.state.typeOfProperty !== ""
            ? "selectPRo maltaback" + " " + this.state.valueItem
            : "selectPRo "
        }
        name={this.state.valueItem}
        defaultValue={this.state.valueItem ===""? "Select Option ": this.state.valueItem}
        onChange={this.state.handlebedFunc}
        size="large"
      >
        {this.state.optionsItem.map((item, key) => (
          <Option value={item} key={key}>
            {item}
          </Option>
        ))}
      </Select>
    );
  }
}

export default Selectbox;
