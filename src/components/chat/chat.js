import React from "react";
import { Row, Col, Collapse } from 'antd';
import './chat.css'
import ChatBox from "./chatBox"
const { Panel } = Collapse;

function Chat() {

  return (
    <div>
      <div className="chat-section">
        <div className="chat-container">
          <ChatBox unique="class1" />
          <ChatBox unique="class2" />
          <ChatBox unique="class3" />
        </div>
      </div>
    </div>
  );
}
export default Chat
