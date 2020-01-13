import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


const Heiher=()=> {

 return class Hoc extends Component {
    render() {
        return (
            <div>
              
                lahdfjhfdljkdh
            </div>
        )
    }
}





}

const mapStateToProps = state => ({
UserState: state.userReducer
});
export default connect(mapStateToProps)(withRouter(Heiher));