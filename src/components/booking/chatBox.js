import React from "react"
import { Row, Col, Collapse } from 'antd';
const { Panel } = Collapse;



function callback(key) {
  console.log(key);
}
function ChatBox(props){
  const collapse = () => {
    // const panal = document.querySelector(".c1.ant-collapse-header");
    var div = document.querySelector("."+props.unique);
    div=div.children[1].children[0].children[0].children[0]
    div.click();
    console.log(div);
  }
  return(
    <div className={"chat-box "+props.unique}>
              <div className="chat-main">
                <Row>
                  <Col lg={3} xl={3} md={3} sm={3} xs={6} >
                    <div className="chat-component-logo">
                      <img src="images/chat/chat_logo.png" alt="chat component logo" />
                    </div>
                  </Col>
                  <Col lg={21} xl={21} md={21 } sm={21}  xs={18} >
                    <div className="chat-right">
                      <div className="switch_time">
                        <p className="chat-top-p"><strong>Switcheroo</strong> has started conversation</p>
                        <p className="chat-time-p">10:00PM</p>
                      <div className="ellipses-icon-div">
                        <i class="fas fa-ellipsis-h"></i>
                      </div>
                      </div>
                    </div>
                  </Col>
                      <div className="clear"></div>
                  <Col offset={3} lg={21}>

                    <div className="welcome-div chat-right">

                      <h2 className="welcome-heading">Hi John, Welcome</h2>
                      <p className="welcome-paragraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptatibus officia. Voluptatum suscipit hic aliquam.
                    </p>
                      <div className="chat-icons-div">
                        <span className="reply"><i class="fas fa-reply"></i> Reply</span>
                        <span onClick={collapse} className="reply-counts"><i class="fas fa-angle-left"></i> 10 Replies</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="chat-replies">
                <Collapse className="chat-collapse" defaultActiveKey={['0']} onChange={callback}>
                  <Panel className="p1" header="This is panel header 1" key="1">
                  <Row>
                  <Col lg={4}>
                    <div className="chat-component-reply-logo">
                      <img src="images/chat/chat_logo.png" alt="chat component logo" />
                    </div>
                  </Col>
                  <Col lg={20}>
                    <div className="chat-right">
                      <div className="switch_time-replies">
                        <p className="chat-top-p"><strong>John</strong> Applicant1</p>
                        <p className="chat-time-p">10:00PM</p>
                      </div>
                    </div>
                  </Col>
                  <Col offset={4} lg={20}>

                    <div className="welcome-div chat-right">

                      <div className="clear"></div>
                      <p className="reply-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptatibus officia. Voluptatum suscipit hic aliquam.
                    </p>
                      <div className="chat-icons-div">
                        <span className="reply"><i class="fas fa-reply"></i> Reply</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <hr className="divider" />
                <Row>
                  <Col lg={4}>
                    <div className="chat-component-reply-logo">
                      <img src="images/chat/chat_logo.png" alt="chat component logo" />
                    </div>
                  </Col>
                  <Col lg={20}>
                    <div className="chat-right">
                      <div className="switch_time-replies">
                        <p className="chat-top-p"><strong>Switcheroo</strong></p>
                        <p className="chat-time-p">10:00PM</p>
                      </div>
                    </div>
                  </Col>
                  <Col offset={4} lg={20}>
                    <div className="welcome-div chat-right">
                      <div className="clear"></div>
                      <p className="reply-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, voluptatibus officia. Voluptatum suscipit hic aliquam.
                      </p>
                      <div className="chat-icons-div">
                        <span className="reply"><i class="fas fa-reply"></i> Reply</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col offset={4} lg={20}>
                    <div className="reply-tool-box">
                    <div className="attach-icon">
                    <i class="fas fa-paperclip"></i>
                    </div>
                    <div className="reply-text-input">
                      <input type="text" placeholder="Type a message" />
                    </div>
                    <div className="chat-tools paper-plane">
                    <i class="fas fa-paper-plane"></i>
                    </div>
                    <div className="chat-tools">
                    <i class="fas fa-grin-alt"></i>
                    </div>
                    <div className="chat-tools microphone">
                    <i class="fas fa-microphone"></i>
                    </div>
                    </div>
                  </Col>
                </Row>
                  </Panel>

                </Collapse>

                

              </div>
            </div>
  );
}
export default ChatBox