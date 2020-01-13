import React, { useState, useEffect } from "react";
import { Row, Col, Button, Switch, Modal } from "antd";
import "./userSettings.css";
import { connect } from "react-redux";
import { updateUser } from "../../redux/Thunk/authThunk/index";
import * as actions from "../../redux/actions/userActions/userActions"
import {Formik,ErrorMessage } from "formik";
import * as SocketIOFileUpload from "socketio-file-upload/client" 

const baseurl=window.baseurl;
const socket=window.socket;
function UserSettings(props) {
  useEffect(()=>{
    const uploader = new SocketIOFileUpload(socket);
    uploader.listenOnInput(document.getElementById("imagegetter"));
    socket.on("imagesaved",(msg)=>{
      if(msg)
      {
        var id=document.getElementById("imagegetter")
        id.value=id.defaultValue;
        props.UpdateUser({image:msg});
      }
    })
    return ()=>{
      socket.off("imagesaved")
    }
  },[0])
  useEffect(() => {
    setUser(props.UserState.user)
    const user = props.UserState.user;
    setFormdata({ ...formdata, email:user.email,phone:user.phone })
  }, [props.UserState]);

  const [user, setUser] = useState(props.UserState.user)
  const data = {
    email: user.email,
    newpassword: "",
    phone: user.phone,
    password: ""
  }
  const [formdata, setFormdata] = useState( data )
  const [editState, setEditState] = useState(false)
  const [modal, setModal] = useState(false)
  const closeModal = () => {
    // setModal(false)
    setEditState(false)
    props.changeModal(false)
  }
  function handleUpdate() {
    // props.UpdateUser(formdata)
    // let secondsToGo = 3;
    // setModal(true);
    // setTimeout(() => {
    //   closeModal()
    // }, secondsToGo * 1000);
  }
  const editButton = () => {
    setEditState(true);
  }
  const crossButton = () => {
    setEditState(false);
  }
  const getPhoto=()=>{
    var id=document.getElementById("imagegetter")
    id.click()
  }
  const imageChange=()=>{
    const uploader = new SocketIOFileUpload(socket);
    uploader.listenOnInput(document.getElementById("imagegetter"));
    uploader.addEventListener("error",(e)=>{
      alert(e)
    })  
  }

 const handleUpdateChange=(val,e)=>{
   let data={[e.target.name]:val}
   props.UpdateUser(data)
 }
console.log(user)
  return (
    <Col lg={24}>
      <SucessModal open={props.UserState.modal} close={closeModal} />
      <div className="user-settings">
        <h1>Settings</h1>
        <div className="user-settings-inner-c">
          <Row className="u-s-row">
            <Col className="dp-col" lg={6}>
              <div className="user-photo-c">
                <div className="user-photo">
                  <img
                  src={`${baseurl}/static/`+user.image} 
                  // src="images/settings/dp.jpg" 
                  alt="DP" />
                </div>
              </div>
              <div className="clear"></div>
              <div className="camera-icon-div" onClick={getPhoto}>
                <div className="camera-icon">
                  <img
                    src="images/home/icons/camera-icon.png"
                    alt="camera-icon"
                  />
                </div>
                <input type="file" id="imagegetter" accept="image/*" className="displaynone" onChange={imageChange}/>
                <h5 className="upload-photo-h" >upload Photo</h5>
              </div>
            </Col>
            <Col className="info-col" lg={8}>
              <div className="user-info">
                <div class="heading-div">
                  <span class="my-text">Security</span>
                  <span onClick={editButton} class="fas fa-pen my-icon1" f></span>
                  {editState &&
                    <span onClick={crossButton} class="fas fa-times-circle my-icon2" f></span>
                  }
                </div>
                {!editState &&
                  <div className="user-data">
                    <ul>
                      <li>
                        <p className="term">Email</p>
                        <p className="term-d">{user.email}</p>
                      </li>
                      <li>
                        <p className="term">Phone</p>
                        <p className="term-d">{user.phone}</p>
                      </li>
                      <li>
                        <p className="term">Password</p>
                        <p className="term-d">********</p>
                      </li>
                    </ul>
                  </div>

                }
                {
                  editState &&
                  <Formik
                    initialValues={formdata}
                    validate={values => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                      ) {
                        errors.email = 'Invalid email address';
                      }
                      if(!values.phone)
                      errors.phone="phone required"
                      if(values.newpassword)
                      if(!values.password)
                      errors.password="password required"
                      if(values.password)
                      {
                        if(!values.newpassword)
                        errors.newpassword="newpassword required"
                        else
                        if(values.newpassword.length<6)
                        errors.newpassword="password mustbe atleast 6 characters";
                      }

                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      console.log(values)
                      props.UpdateUser(values,true,()=>(setEditState(false)))
                    }}
                  >
                    {
                      ({ values,
                        errors,
                        handleChange,
                        handleSubmit,
                       }) => {
                      return  <div className="edit-user-form">

                          <fieldset>
                            <legend>Email </legend>
                            <input type="email" name="email" value={values.email} disabled defaultValue={values.email} handleChange={handleChange}/>
                          </fieldset>
                        <ErrorMessage name="email">{msg=><div className="errors">{msg}</div>}</ErrorMessage>
                          <fieldset>
                            <legend>Phone</legend>
                            <input type="tel" name="phone" value={values.phone} defaultValue={values.phone}  onChange={handleChange} />
                          </fieldset>
                          <ErrorMessage name="phone">{msg=><div className="errors">{msg}</div>}</ErrorMessage>
                          <fieldset>
                            <legend>Password</legend>
                            <input type="password" name="password" value={values.password} onChange={handleChange} />
                          </fieldset>
                          <ErrorMessage name="password">{msg=><div className="errors">{msg}</div>}</ErrorMessage>
                          <fieldset>
                            <legend>Change Password</legend>
                            <input type="password" name="newpassword" value={values.newpassword} onChange={handleChange} />
                          </fieldset>
                          <ErrorMessage name="newpassword">{msg=><div className="errors">{msg}</div>}</ErrorMessage>
                          <div>
                            <Button className="update-btn" type="primary" onClick={handleSubmit} disabled={props.UserState.loading}>Update</Button>
                          </div>
                        </div>
                      }
                    }

                  </Formik >
                }
              </div>
            </Col>
            <Col lg={10}>
              <div className="com-c">
                <div className="heading-div">
                  <h3>Privacy</h3>
                  <p>Please setup your communication preferences from following options.</p>
                </div>
                <div className="com-options">
                  <ul>
                    <li>
                      <h3>SMS</h3>
                      <p>Would you like to retrieve updates via SMS</p>
                      
                        <Switch checked={user.updatesViaSms}  className="switch" name="updatesViaSms" onChange={handleUpdateChange} />
                    </li>
                    <li>
                      <h3>PHONE</h3>
                      <p>Would you like to retrieve updates via PHONE</p>
                      <Switch checked={user.updatesViaPhone}   className="switch" name="updatesViaPhone" onChange={handleUpdateChange} />
                    </li>
                    <li>
                      <h3>EMAIL</h3>
                      <p>Would you like to retrieve updates via EMAIL</p>
                      <Switch checked={user.updatesViaEmail}   className="switch" name="updatesViaEmail" onChange={handleUpdateChange} />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
}
const mapStateToProps = state => ({
  UserState: state.userReducer
});
const mapDispatchToProps = (Dispatch) => ({
  UpdateUser: (state,setModal=false,callback=null) => Dispatch(updateUser(state,setModal,callback)),
  changeModal:state=>Dispatch(actions.SetModal(state))
});
export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);


function SucessModal(props) {



  return (

    <Modal className="update-user-settings-m"
      visible={props.open}
      onCancel={props.close}
    >
      <div>
        <span className="done-icon fas fa-check-circle"></span>
      </div>
      <p>Profile Updated Sucessfully</p>
    </Modal>

  );
}
