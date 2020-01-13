
import * as actions from "../../actions/userActions/userActions";
import api from "../../api/index";
import {  notification } from 'antd';

const savetoken = (token) => {
    localStorage.setItem("tokenas", token)
    // sessionStorage.setItem("tokenas", token)

}

const AddErrors=(err,dispatch)=>{
    dispatch(actions.AddErr(err.errors))
    setTimeout(()=>{
    dispatch(actions.AddErr([]))
    },1000);
    console.log(err)
}


const SignUp = (data,props) => dispatch => {
    // console.log(data)
    const saveUser = (err, res) => {
        if (!err) {

            dispatch(actions.AddUser(res.user));
            // notification["success"]({
            //     message: 'Welcome User',
            //     description:
            //       'Please check you email and confirm your account. Thanku !😇  ',
            //   });
            savetoken(res.token)
        }
        else
        {
            dispatch(actions.AddErr(err.errors))
            setTimeout(()=>{
            dispatch(actions.AddErr([]))
            },1000);
            console.log(err)
        }
    }
    api.post("/api/auth/register", data,null, dispatch, saveUser);
}

const loadUser = () => dispatch => {
    const token=localStorage.getItem("tokenas")
    // const token=sessionStorage.getItem("tokenas")

    if(token)
    api.get("/api/user/getuser", null,token, dispatch, (err,res) => {
        if(!err)
        {
            dispatch(actions.AddUser(res.user))

        }
        console.log(res,err)
    })
}
const login=(data,props)=>dispatch=>{
    api.post("/api/auth/login",data,null,dispatch,(err,res)=>{
        console.log(data)
        if (!err) {

            dispatch(actions.AddUser(res.user));
            // if(data.remember)
            savetoken(res.token)
            props.history.push("/home")
        }
        else
        {
            dispatch(actions.AddErr(err.errors))
            setTimeout(()=>{
            dispatch(actions.AddErr([]))
            },1000);
            console.log(err)
        }
    })
}

const updateUser=(data,setModal,callback)=>dispatch=>{
    console.log(data)
    const token=localStorage.getItem("tokenas")
    // const token=sessionStorage.getItem("tokenas")
if(token)
    api.put("/api/user/updateuser",data,token,dispatch,(err,res)=>{
        if(!err)
        {
            dispatch(actions.UpdateUser(res.user));
            savetoken(res.token)
            if(setModal)
            {

                dispatch(actions.SetModal(true))
                setTimeout(() => {
                    dispatch(actions.SetModal(false))
                    callback()
                }, 1000);
            }
        }
        else
        AddErrors(err,dispatch)
    })
}
const deleteUser=(props)=> dispatch=>{
    // sessionStorage.removeItem("tokenas")
    localStorage.removeItem("tokenas")
   dispatch(actions.DeleteUser())
     props.history.push("/login")
}
const resendEmail=(email)=>dispatch=>{
api.post("/api/auth/verify/resend",{email},null,dispatch,()=>{
    console.log("done")
})
}

export { SignUp, loadUser ,login,updateUser,deleteUser,resendEmail};