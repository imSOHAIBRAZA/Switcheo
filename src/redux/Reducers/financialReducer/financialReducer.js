import * as Action from "../../actions/financial_health/financialActionType";

const initialstate = {
  loading: false,
  financial_Health_Check: {},
  errors: false,
  modal: false
};

export default function(state = initialstate, action) {
  console.log(action)
  switch (action.type) {
    case Action.ADD_FINANCIAL_DATA:
      return {
        ...state,
        loading: false
        // financial_Health_Check: action.payload
      };
    case Action.SET_FINANCIAL_DATA:
      return {
        ...state,
        loading: false,
        financial_Health_Check: {
          ...state.financial_Health_Check,
          ...action.payload
        }
      };
    case Action.SET_FINANCIAL_APPLICANTONE:
      return {
      
        ...state,
        loading: false,
        financial_Health_Check: {
          ...state.financial_Health_Check,
          applicantOne: {
            ...state.financial_Health_Check.applicantOne,
            ...action.payload
          }
        }
      };
     case Action.SET_FINANCIAL_APPLICANTTWO:
      return {
      
        ...state,
        loading: false,
        financial_Health_Check: {
          ...state.financial_Health_Check,
          applicantTwo: {
            ...state.financial_Health_Check.applicantTwo,
            ...action.payload
          }
        }
      };
   case Action.REMOVETESTATE:
        return {
        
          ...state,
          loading: false,
          financial_Health_Check:{}
        };
    case Action.FINANCIAL_DATA_LOADING:
      return { ...state, loading: action.payload };
    case Action.ADD_ERR_FINANCIAL_DATA: {
      return { ...state, errors: action.payload };
    }
    case Action.SET_MODAL_FINANCIAL_DATA:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
}

// applicantOne:
// {
// maritalStatus: "Single",
// dateOfBirth: 27,
// childrenFinanciallyDependent: 1,
// ageOfChild: 14,
// publicOrPrivateSector: "Private Sector",
// industry: "Agriculture",
// selfEmployedOrPaye: "Self Employed",
// basicIncome: 75000,
// overTimeEarnedInyear: 200,
// commissionEarnedInYear: 2000,
// bonusEarnedInYear: 200,
// guaranteedAllowance: 200,
// otherVariableIncome: 2275,
// annualPension: 1000,
// nusrseryOrChildminding: 200,
// spousalMaintenanceCosts: 300,
// creditCardLimit: 10000,
// monthlyCreditCardCharges: 150,
// overDraftLimit: 200,
// overDraftCharges: 200,
// monthlyLoanRepayments: 1000,
// monthlyCashFlow: 500,
// },
  // applicantTwo:{
  // maritalStatus: "Single",
  // dateOfBirth: 27,
  // childrenFinanciallyDependent: 1,
  // ageOfChild: 14,
  // publicOrPrivateSector: "Private Sector",
  // industry: "Agriculture",
  // selfEmployedOrPaye: "Self Employed",
  // basicIncome: 75000,
  // overTimeEarnedInyear: 200,
  // commissionEarnedInYear: 2000,
  // bonusEarnedInYear: 200,
  // guaranteedAllowance: 200,
  // otherVariableIncome: 2275,
  // annualPension: 1000,
  // nusrseryOrChildminding: 200,
  // spousalMaintenanceCosts: 300,
  // creditCardLimit: 10000,
  // monthlyCreditCardCharges: 150,
  // overDraftLimit: 200,
  // overDraftCharges: 200,
  // monthlyLoanRepayments: 1000,
  // monthlyCashFlow: 500,
  // }

// typeOfProperty: "Apartment",
// howManyBedrooms: 3,
// valueOfProperty: 250000,
// propertyLocation: "Urban",
// sizeOfMortgage: 155000,
// yearsToPayOffMortgage: 25

// financial_Health_Check:{
//   filedBankruptcy: "yes",
//   countyCourtJudgement: "no",
//   homeRepossessed: "no",
//   enteredIntoDrn: "yes",
//   enteredIntoDsa: "no",
//   enteredIntoPia: "no",
//   failedToPayLoan: "no",
//   purposeOfMortgage: "Switcher",
//   peopleOnMortgage: "two",
//   firstNameSecondApplicant: "Umar",
//   lastNameSecondApplicant: "Awan",
//   emailSecondApplicant: "umarpromd@gmail.com",

//   },
