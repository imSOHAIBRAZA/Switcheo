import * as actions from "./types";
const AddMeeting = payload => {
  return {
    type: actions.ADD_MEETING,
    payload
  };
};

const LoadingMeeting = payload => ({
  type: actions.MEETING_LOADING,
  payload
});
const SetDay = payload => ({
    type: actions.SET_day,
    payload
  });
const AddMeetingErr = payload => ({
  type: actions.ADD_ERR_MEETING
});
const SetModalMeeting = () => ({
  type: actions.SET_MODAL_MEETIN
});

export { AddMeeting, LoadingMeeting, AddMeetingErr, SetModalMeeting,SetDay };
