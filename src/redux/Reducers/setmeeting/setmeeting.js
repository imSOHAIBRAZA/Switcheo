import * as Action from "../../actions/meetingAction/types";

const initialstate = {
  loading: false,
    appointmentTime: null,
    appointmentDate: null,
    appointmentSection: null,
  errors: [],
  modal: false
};

export default function(state = initialstate, action) {
  switch (action.type) {
    case Action.ADD_MEETING:
      return { ...state, loading: false, user: action.payload };
      case Action.SET_day:
        return { ...state, loading: false, appointmentDate: action.payload };
    case Action.MEETING_LOADING:
      return { ...state, loading: action.payload };
    case Action.ADD_ERR_MEETING: {
      return { ...state, errors: action.payload };
    }
    case Action.SET_MODAL_MEETIN:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
}
