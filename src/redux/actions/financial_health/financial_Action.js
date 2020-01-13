import * as actions from "./financialActionType";

const addFinancialData = payload => {
  return {
    type: actions.ADD_FINANCIAL_DATA,
    payload
  };
};

const LoadingFinancialData = payload => ({
  type: actions.FINANCIAL_DATA_LOADING,
  payload
});
const setFinancialData = payload => ({
  type: actions.SET_FINANCIAL_DATA,
  payload
});
const FinancialDataErr = payload => ({
  type: actions.ADD_ERR_FINANCIAL_DATA
});
const SetModalFinancialData = () => ({
  type: actions.SET_MODAL_FINANCIAL_DATA
});
const SetApplicantOneData = payload => ({
  type: actions.SET_FINANCIAL_APPLICANTONE,
  payload
});
const SetApplicantTwoData = payload => ({
  type: actions.SET_FINANCIAL_APPLICANTTWO,
  payload
});

const removeFinancialData= payload => ({
  type: actions.REMOVETESTATE,
  payload
});
export {
  addFinancialData,
  SetApplicantOneData,
  SetApplicantTwoData,
  LoadingFinancialData,
  setFinancialData,
  FinancialDataErr,
  SetModalFinancialData,
  removeFinancialData
};
