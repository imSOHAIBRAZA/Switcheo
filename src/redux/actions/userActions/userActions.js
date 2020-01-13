import * as actions from "./userActionTypes"
const AddUser=(payload)=>{

return {
    type:actions.ADD_USER,
    payload
}
}
const UpdateUser=(payload)=>({
    type:actions.UPDATE_USER,
    payload
})
const DeleteUser=()=>({
    type:actions.DELETE_USER
})
const Loading=(payload)=>({
    type:actions.USER_LOADING,
    payload
}
)
const AddErr=(payload)=>({
    type:actions.ADD_ERR,
    payload
})
const SetModal=(payload)=>({
    type:actions.SET_MODAL,
    payload
})

export {AddUser,UpdateUser,DeleteUser,Loading,AddErr,SetModal};