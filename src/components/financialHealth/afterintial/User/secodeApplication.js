import React, { Component } from "react";
import TopUserNavigation from "./topnavigation/index";
import "./user.css";

import UserForm1 from "./userFrom1/userForm";
import UserForm2 from "./userFrom2/userForm";
import UserForm3 from "./userFrom3/userForm";

import Api from "../../../../redux/api/financialHealthCheck";
import { connect } from "react-redux";

class App extends React.Component {
  state = {
    current: 0,
    userId: "",
    maritalStatus: "Single",
    maritalStatusOptions: ["Married", "Single", "Widowed"],
    selfEmployedOrPaye: "Self Employed",
    childrenFinanciallyDependent: 2,
    childrenFinanciallyDependentOptions: [1, 2, 3],
    publicOrPrivateSector: "",
    selfEmployedOrPayeOptions: ["Self Employed", "Paye"],
    dateOfBirth: "",
    basicIncome: 75000,
    basicIncomeDisable: false,

    overTimeEarnedInyear: 0,
    overTimeEarnedInyearDisable: false,

    commissionEarnedInYear: 0,
    commissionEarnedInYearDisable: false,

    bonusEarnedInYear: 0,
    bonusEarnedInYearDisable: false,

    guaranteedAllowance: 0,
    guaranteedAllowanceDisable: false,

    otherVariableIncome: 0,
    otherVariableIncomeDisable: false,

    annualPension: 0,
    annualPensionDisable: false,

    nusrseryOrChildminding: 200,
    nusrseryOrChildmindingDisable: false,

    spousalMaintenanceCosts: 300,
    spousalMaintenanceCostsDisable: false,

    monthlyCreditCardCharges: 150,
    monthlyCreditCardChargesDisable: false,

    overDraftLimit: 0,
    overDraftLimitDisable: false,

    creditCardLimit: 0,
    creditCardLimitDisable: 0,

    overDraftCharges: 0,
    overDraftChargesDisable: false,

    monthlyLoanRepayments: 0,
    monthlyLoanRepaymentsDisable: false,

    monthlyCashFlow: 0,
    monthlyCashFlowDisable: false
  };
  clickRadio = e => {
    // var radioContainer =
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  };
  handleMerital = value => {
    this.setState({ maritalStatus: value });
  };
  handleWork = value => {
    this.setState({ selfEmployedOrPaye: value });
  };
  handleChild = value => {
    this.setState({ childrenFinanciallyDependent: value });
  };
  handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    this.setState({ [e.target.name]: e.target.value });
    for (var i = 0; i < radioContainers.length; i++) {
      var input = radioContainers[i].childNodes[0];
      if (input.checked) {
        input.parentNode.style.background = "#fb9500";
      } else {
        input.parentNode.style.background = "lightgray";
      }
    }
  };
  onChangeDate = (date, dateString) => {
    this.setState({
      dateOfBirth: date
    });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.financial_back_data.applicantTwo &&
      prevState.publicOrPrivateSector !==
        nextProps.financial_back_data.applicantTwo.publicOrPrivateSector &&
      prevState.userId !== nextProps.userId
    ) {
      const {
        maritalStatus,
        selfEmployedOrPaye,
        childrenFinanciallyDependent,
        publicOrPrivateSector,
        basicIncome,
        overTimeEarnedInyear,
        commissionEarnedInYear,
        bonusEarnedInYear,
        guaranteedAllowance,
        otherVariableIncome,
        annualPension,
        nusrseryOrChildminding,
        spousalMaintenanceCosts,
        monthlyCreditCardCharges,
        overDraftLimit,
        dateOfBirth,
        creditCardLimit,
        overDraftCharges,
        monthlyLoanRepayments,
        monthlyCashFlow
      } = nextProps.financial_back_data.applicantTwo;
      const { userId } = nextProps;

      return {
        ...prevState,
        userId,
        maritalStatus,
        selfEmployedOrPaye,
        childrenFinanciallyDependent,
        publicOrPrivateSector,
        basicIncome,
        overTimeEarnedInyear,
        commissionEarnedInYear,
        bonusEarnedInYear,
        dateOfBirth,
        guaranteedAllowance,
        otherVariableIncome,
        annualPension,
        nusrseryOrChildminding,
        spousalMaintenanceCosts,
        monthlyCreditCardCharges,
        overDraftLimit,
        creditCardLimit,
        overDraftCharges,
        monthlyLoanRepayments,
        monthlyCashFlow
      };
    }

    return prevState;
  }
  onsubmitForm = () => {
    const {
      maritalStatus,
      selfEmployedOrPaye,
      childrenFinanciallyDependent,
      publicOrPrivateSector,
      basicIncome,
      overTimeEarnedInyear,
      commissionEarnedInYear,
      bonusEarnedInYear,
      guaranteedAllowance,
      otherVariableIncome,
      annualPension,
      dateOfBirth,
      nusrseryOrChildminding,
      spousalMaintenanceCosts,
      monthlyCreditCardCharges,
      overDraftLimit,
      creditCardLimit,
      overDraftCharges,
      monthlyLoanRepayments,
      monthlyCashFlow
    } = this.state;

    if (this.state.current === 0) {
      this.setState({ current: 1 });
    } else if (this.state.current === 1) {
      this.setState({ current: 2 });
    } else if (this.state.current === 2) {
      const newItem = {
        maritalStatus,
        selfEmployedOrPaye,
        childrenFinanciallyDependent,
        publicOrPrivateSector,
        basicIncome,
        overTimeEarnedInyear,
        commissionEarnedInYear,
        bonusEarnedInYear,
        guaranteedAllowance,
        otherVariableIncome,
        dateOfBirth,

        annualPension,
        nusrseryOrChildminding,
        spousalMaintenanceCosts,
        monthlyCreditCardCharges,
        overDraftLimit,
        creditCardLimit,
        overDraftCharges,
        monthlyLoanRepayments,
        monthlyCashFlow
      };
      this.props.SetApplicantOneData(
        {
          userId: this.props.userId,
          applicants: {
            ...this.props.financial_back_data,
            applicantTwo: {
              ...newItem
            }
          }
        },
        () => {
          this.props.changeProfRout("result");
        }
      );
    }
  };
  onChangeme = current => {
    this.setState({ current });
  };
  onChangeSecond = e => {
    this.setState({
      [e.target.name]: 0,
      [`${e.target.name}Disable`]: e.target.checked
    });
  };
  onChangeTextSecond = e => {
    var reg = /^-?\d*\.?\d*$/;

    if (reg.test(e.target.value)) {
      this.setState({
        [e.target.name]: Number(e.target.value)
      });
    }
  };
  onChangeback = () => {
    if (this.state.current === 2) {
      this.setState({ current: 1 });
    } else if (this.state.current === 1) {
      this.setState({ current: 0 });
    }
  };
  UserFormRender = () => {
    const { current } = this.state;
    if (current === 0)
      return <UserForm1 allState={this.state} thisObject={this} />;
    if (current === 1)
      return <UserForm2 allState={this.state} thisObject={this} />;
    if (current === 2)
      return <UserForm3 allState={this.state} thisObject={this} />;
  };
  render() {
    const { current } = this.state;
    console.log(this.props.financial_back_data);
    return (
      <div className="user_form">
        <TopUserNavigation current={current} onChange={this.onChangeme} />
        <div style={{ padding: "20px" }}>{this.UserFormRender()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({
  userReducer: {
    user: { _id }
  },
  Financial_data: { loading, error, modal, financial_Health_Check }
}) => ({
  financial_data: { loading, error, modal },
  financial_back_data: financial_Health_Check,
  userId: _id
});

const mapDispatchToProps = dispacth => ({
  SetApplicantOneData: (props, callback) =>
    dispacth(Api.financialDataPost(props, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
