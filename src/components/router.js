import React from "react";
import Login from "./login/login";
import Signup from "./signup/signup";
import ForgetPassword from "./forgetPassword/forgetPassword";
import ResetPassword from "./forgetPassword/resetPassword";
import { BrowserRouter, withRouter, Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./signup/pageTransitions/slideTransition.css"
import Chat from "./chat/chat";
import Home from "./home/home";
import { connect } from "react-redux";
import { loadUser } from "../redux/Thunk/authThunk"
import RegistrationSuccessfully from "./varifyAccount/index";
import PasswordRestVerification from "./varifyAccount/Password-reset-verification"
import { notification } from 'antd';




class Routing extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location)
    };
  }
  componentWillMount() {
    if(!this.props.UserState._id)
    this.props.loaduser()
  }
  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }
  render() {
    const { location,UserState } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };
this.props.UserState.errors.map((err,key)=>{
  notification.error({
    message: err,
    // description:
    //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
})
const PrivateRoute=({ children, ...rest })=>{
  return (
    <Route
      {...rest}
      component={Home}
      // render={({ location }) =>
      //   UserState.user._id ? 
      //       children
      //  : (
      //     <Redirect
      //       to={{
      //         pathname: "/login",
      //         state: { from: location }
      //       }}
      //     />
      //   )
      // }
    />
  );
}
    return (
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div
            className={
              this.getPathDepth(location) - this.state.prevDepth >= 0
                ? "bottom"
                : "right"
            }
          >



            <Switch>
              <Route exact path="/" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgetpassword" component={ForgetPassword} />
              {/* <Route exact path="/resetpassword" component={ResetPassword} /> */}
              {/* <PrivateRoute path="/home">
                <Home/>
              </PrivateRoute> */}
              {/* <Route path="/home" render={()=><Home/>} /> */}
              <Route   path="/home" render={()=>UserState.user._id?(UserState.user.isVerified?(<Home/>):
              (<Redirect  to={{
                pathname: "/verifymail",
                // state: { from: location }
              }}/>)
              )
              :(
                <Redirect
                to={{
                  pathname: "/login",
                  // state: { from: location }
                }}
                />
              )
            } />
              <Route exact path="/verifymail" component={RegistrationSuccessfully} />
              <Route exact path="/resetpassword" component={PasswordRestVerification} />
              
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
const mapDispatchToProps = (Dispatch) => ({
  loaduser: (state) => Dispatch(loadUser(state))
})

const mapStateToProps = state => ({
  UserState: state.userReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Routing));
