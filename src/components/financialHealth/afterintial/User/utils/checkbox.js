import React from "react";
import { Checkbox } from "antd";

import "./checkbox.css";
const FormCheckbox = props => {
  return (
    <div className="form_checkbox">
      <div className="input">
        <p className="input-lbl">{props.children}</p>
        <p 
         className={props.itemName[2] ? "EruoSymbleDisableClass" : "EruoSymbleanableClass"}
        >&euro;</p>        

        <input
          type="text"
          disabled={props.itemName[2]}
          name={props.itemName[0]}
          value={props.itemName[1]}
          onChange={props.onChangeTextSecond}
          className={props.itemName[2] ? "DisableClass" : "anableClass"}
          placeholder="0"
        />

        <Checkbox
          className="checkbox"
          name={props.itemName[0]}
          onChange={props.onChangefunc}
        >
          {" "}
          Not Applicable?
        </Checkbox>
      </div>
    </div>
  );
};

export default FormCheckbox;
