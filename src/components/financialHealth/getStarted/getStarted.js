
import React,{useEffect} from "react";
import StepZilla from "react-stepzilla";
import BackGround from "../backGround/backGround";
import YourResult from "../result/result";
import Index from "../afterintial/";
import Property from "../property/";
import User from "../User/"
import { Row, Col } from "antd";
import "./main.css"



const steps =
    [
      
      {name: 'Background', component: <BackGround />},
      {name: 'Property Details', component: <Property/>},
      {name: 'Details About you', component: <User />},
      {name: 'Results', component: <YourResult />},
      
    ]




const GetStarted = () => {
  useEffect(()=>{
    document.getElementById('prev-button').innerText = "Back";
    document.getElementById('next-button').innerText = "Save & Countinue";
  },[]);
  return(
  <div className='container'>
   
   <div className='step-progress'>
        <StepZilla steps={steps}/>
    </div>
   
  </div>
)}

export default GetStarted;

// import React, { useState, useEffect } from "react";
// import { Row, Col, Button } from "antd";
// import { withRouter } from "react-router-dom";
// import "./getStarted.css";
// import Api from "../../../redux/api/financialHealthCheck";
// import { connect } from "react-redux";

// const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// function GetStarted(props) {
//   const [questions, setQuestions] = useState({
//     filedBankruptcy: "",
//     filedBankruptcyValidation: false,
//     filedBankruptcyHelp: "",
//     filedBankruptcyValidationStatus: "error",

//     failedToPayLoan: "",
//     failedToPayLoanValidation: false,
//     failedToPayLoanHelp: "",
//     failedToPayLoanValidationStatus: "error",

//     purposeOfMortgage: "",
//     purposeOfMortgageValidation: "",
//     purposeOfMortgageHelp: "",
//     purposeOfMortgageValidationStatus: "error",

//     peopleOnMortgage: "one",

//     firstNameSecondApplicant: "",
//     lastNameSecondApplicant: "",

//     emailSecondApplicant: "",
//     emailSecondApplicantValidation: false,
//     emailSecondApplicantHelp: "",
//     emailSecondApplicantValidationStatus: "error",

//     emailSecondApplicantre: "",
//     emailSecondApplicantreValidation: false,
//     emailSecondApplicantreHelp: "",
//     emailSecondApplicantreValidationStatus: "error"
//   });

//   const [q4, setQ4] = useState(false);
//   function clickRadio(e) {
//     var label = e.target.childNodes[1];
//     if (label) {
//       label.click();
//     }
//   }

//   const validateRadio = (name, value) => {
//     switch (name) {
//       case "filedBankruptcy":
//       case "failedToPayLoan":
//       case "purposeOfMortgage":
//         if (value === "") {
//           setQuestions({
//             ...questions,
//             [name]: value,
//             [`${name}Validation`]: "error",
//             [`${name}Help`]: "please Select one of above",
//             [`${name}ValidationStatus`]: false
//           });
//         } else {
//           setQuestions({
//             ...questions,
//             [name]: value,
//             [`${name}Validation`]: "success",
//             [`${name}Help`]: "",
//             [`${name}ValidationStatus`]: true
//           });
//         }
//         break;
//       case "emailSecondApplicant":
//         if (!emailPattern.test(value)) {
//           setQuestions({
//             ...questions,
//             [name]: value,
//             emailSecondApplicantValidationStatus: "error",
//             emailSecondApplicantHelp: "You email is not valid",
//             emailSecondApplicantValidation: false
//           });
//         } else {
//           setQuestions({
//             ...questions,
//             [name]: value,
//             emailSecondApplicantValidationStatus: "success",
//             emailSecondApplicantHelp: "",
//             emailSecondApplicantValidation: true
//           });
//         }
//         break;
//       case "emailSecondApplicantre":
//         if (value !== questions.emailSecondApplicant) {
//           setQuestions({
//             ...questions,
//             [name]: value,
//             emailSecondApplicantreValidationStatus: "error",
//             emailSecondApplicantreHelp: "You email is not match",
//             emailSecondApplicantreValidation: false
//           });
//         } else {
//           setQuestions({
//             ...questions,
//             [name]: value,
//             emailSecondApplicantreValidationStatus: "success",
//             emailSecondApplicantreHelp: "",
//             emailSecondApplicantreValidation: true
//           });
//         }
//         break;
//     }
//   };
//   var handleQ = e => {
//     var radioContainers = e.target.parentNode.parentNode.childNodes;
//     var qs = questions;
//     qs[e.target.name] = e.target.value;
//     setQ4(!q4);
//     validateRadio(e.target.name, e.target.value);
//     for (var i = 0; i < radioContainers.length; i++) {
//       var input = radioContainers[i].childNodes[0];
//       if (input.checked) {
//         input.parentNode.style.background = "#fb9500";
//         input.parentNode.style.border = "2px solid #fb9500";
//       } else {
//         input.parentNode.style.background = "lightgray";
//         input.parentNode.style.border = "2px solid gray";
//       }
//     }
//   };

//   const handleinput = e => {
//     if (
//       e.target.name === "emailSecondApplicant" ||
//       e.target.name === "emailSecondApplicantre"
//     ) {
//       validateRadio(e.target.name, e.target.value);
//     } else {
//       setQuestions({ ...questions, [e.target.name]: e.target.value });
//     }
//     if (e.target.value !== "") {
//       e.target.style.background = "#fb9500";
//       e.target.style.border = "2px solid #fb9500";
//     } else {
//       e.target.style.background = "lightgray";
//       e.target.style.border = "2px solid gray";
//     }
//   };
//   useEffect(() => {
//     if (props.financial_back_data !== "") {
//       const {
//         filedBankruptcy,
//         failedToPayLoan,
//         purposeOfMortgage,
//         peopleOnMortgage,
//         firstNameSecondApplicant,
//         lastNameSecondApplicant,
//         emailSecondApplicant
//       } = props.financial_back_data;

//       setQuestions({
//         ...questions,
//         filedBankruptcy,
//         failedToPayLoan,
//         purposeOfMortgage,
//         peopleOnMortgage,
//         firstNameSecondApplicant,
//         lastNameSecondApplicant,
//         emailSecondApplicant,
//         emailSecondApplicantreValidationStatus: "success",
//         emailSecondApplicantreHelp: "",
//         emailSecondApplicantreValidation: true,
//         emailSecondApplicantValidationStatus: "success",
//         emailSecondApplicantHelp: "",
//         emailSecondApplicantValidation: true
//       });
//     }
//   }, [props.filedBankruptcy]);

//   const onsubmitForm = () => {
//     const {
//       filedBankruptcy,
//       failedToPayLoan,
//       purposeOfMortgage,
//       peopleOnMortgage,
//       firstNameSecondApplicant,
//       lastNameSecondApplicant,
//       emailSecondApplicant
//     } = questions;
//     const sigle = {
//       filedBankruptcy,
//       failedToPayLoan,
//       purposeOfMortgage,
//       peopleOnMortgage
//     };
//     const double = {
//       filedBankruptcy,
//       failedToPayLoan,
//       purposeOfMortgage,
//       peopleOnMortgage,
//       firstNameSecondApplicant,
//       lastNameSecondApplicant,
//       emailSecondApplicant
//     };
//     console.log("Data",questions);
//     if (peopleOnMortgage === "two") {
//       props.set_financial_BackGround(
//         {
//           userId: props.userId,
//           applicants: {
//             ...props.financial_back_data,
//            ...double
//           }
//         },
//         callback
//       );
//     } else {
//       props.set_financial_BackGround(
//         {
//           userId: props.userId,
//           applicants: {
//             ...props.financial_back_data,
//             ...sigle
//           }
//         },
//         callback
//       );
//     }
//   };
//   const callback = () => {
//     props.history.push("/home/relatedInformation");
//     props.present && props.changeProfRout("property");
//   };
// // console.log('DATA',state);
//   return (
//     <div className="financial-health">
//       <Row className="fh-row-gs">
//         <Col lg="24" className="col1">
//           <h1 className="heading1">Lets Get Started</h1>
//           <h6 className="heading2">
//             In the last 6 years, have you or anyone you're applying with
//           </h6>
//           <ul className="q1-ul">
//             <li>1). filled for bankruptcy</li>
//             <li>2). been issued a county court judgement (CCJ)</li>
//             <li>3). had your home repossesed</li>
//             <li>4). entered into a Debt Relief Notice (DRN)</li>
//             <li>5). entered into a Debt Sattlement Arrangement (DSA)</li>
//             <li>6). entered into a Personal Insolvancy Arrangement (PIA)?</li>
//           </ul>
//         </Col>
//         <Col lg={24} className="q1">
//           <div
//             onClick={e => clickRadio(e)}
//             className={
//               questions.filedBankruptcy === "Yes"
//                 ? "radio-container container_malta"
//                 : "radio-container"
//             }
//           >
//             <input
//               onChange={e => handleQ(e)}
//               type="radio"
//               name="filedBankruptcy"
//               id="yes"
//               className=""
//               value="Yes"
//               checked={questions.filedBankruptcy === "Yes"}
//             />
//             <label for="yes">Yes</label>
//           </div>
//           <div
//             onClick={e => clickRadio(e)}
//             className={
//               questions.filedBankruptcy === "No"
//                 ? "radio-container container_malta"
//                 : "radio-container"
//             }
//           >
//             <input
//               onChange={e => handleQ(e)}
//               type="radio"
//               name="filedBankruptcy"
//               id="no"
//               className=""
//               checked={questions.filedBankruptcy === "No"}
//               value="No"
//             />
//             <label for="no">No</label>
//           </div>
//         </Col>
//         <Col lg={24} className="col2">
//           <p className="heading3">
//             In the past two years, have you or anyone you're applying with
//             failed to pay a loan or a bill (like utility bills, credit cards or
//             personal loans) for more than 3 months in a row?
//           </p>
//         </Col>
//         <Col lg={24} className="q1">
//           <div
//             onClick={e => clickRadio(e)}
//             className={
//               questions.failedToPayLoan === "Yes"
//                 ? "radio-container container_malta"
//                 : "radio-container"
//             }
//           >
//             <input
//               onChange={e => handleQ(e)}
//               type="radio"
//               name="failedToPayLoan"
//               id="yes1"
//               className=""
//               checked={questions.failedToPayLoan === "Yes"}
//               value="Yes"
//             />
//             <label for="yes1">Yes</label>
//           </div>
//           <div
//             onClick={clickRadio}
//             className={
//               questions.failedToPayLoan === "No"
//                 ? "radio-container container_malta"
//                 : "radio-container"
//             }
//           >
//             <input
//               onChange={e => handleQ(e)}
//               type="radio"
//               name="failedToPayLoan"
//               id="no1"
//               className=""
//               checked={questions.failedToPayLoan === "No"}
//               value="No"
//             />
//             <label for="no1">No</label>
//           </div>
//         </Col>
//         <Col lg={24} className="col3">
//           <p className="heading3">What is the mortgage for?</p>
//         </Col>
//         <Col lg={24} className="q1 q3">
//           <div
//             onClick={e => clickRadio(e)}
//             className={
//               questions.purposeOfMortgage === "First Time Buyer"
//                 ? "radio-container container_malta"
//                 : "radio-container"
//             }
//           >
//             <input
//               onChange={e => handleQ(e)}
//               type="radio"
//               name="purposeOfMortgage"
//               id="mortf"
//               className=""
//               checked={questions.purposeOfMortgage === "First Time Buyer"}
//               value="First Time Buyer"
//             />
//             <label for="mortf">First Time Buyer</label>
//           </div>
//           <div
//             onClick={clickRadio}
//             className={
//               questions.purposeOfMortgage === "House Mover"
//                 ? "radio-container container_malta"
//                 : "radio-container"
//             }
//           >
//             <input
//               onChange={e => handleQ(e)}
//               type="radio"
//               name="purposeOfMortgage"
//               id="mortf1"
//               checked={questions.purposeOfMortgage === "House Mover"}
//               className=""
//               value="House Mover"
//             />
//             <label for="mortf1">Moving House</label>
//           </div>
//           <div
//             onClick={clickRadio}
//             className={
//               questions.purposeOfMortgage === "Switcher"
//                 ? "radio-container container_malta"
//                 : "radio-container"
//             }
//           >
//             <input
//               onChange={e => handleQ(e)}
//               type="radio"
//               name="purposeOfMortgage"
//               id="mortf2"
//               checked={
//                 questions.purposeOfMortgage === "Switcher"
//               }
//               className=""
//               value="Switcher"
//             />
//             <label for="mortf2">Switching to Batter Rate</label>
//           </div>
//         </Col>
//         <Col lg={24} className="col2">
//           <p className="heading3">
//             How many people do you want named on the mortgage?
//           </p>
//         </Col>
//         <Col lg={24} className="note-col">
//           <p className="note">
//             Its ok if the person you're applying with doesn't have an income -
//             thay can still ba named on your mortgage. choose option "Two" if
//             you'd like to own the property togather.
//           </p>
//         </Col>
//         <Col lg={24} className="q1">
//           <div
//             onClick={e => clickRadio(e)}
//             className={
//               questions.peopleOnMortgage === "one"
//                 ? "radio-container container_malta"
//                 : "radio-container"
//             }
//           >
//             <input
//               onChange={e => handleQ(e)}
//               type="radio"
//               name="peopleOnMortgage"
//               id="q41"
//               className=""
//               checked={questions.peopleOnMortgage === "one"}
//               value="one"
//             />
//             <label for="q41">One</label>
//           </div>
//           <div
//             onClick={clickRadio}
//             className={
//               questions.peopleOnMortgage === "two"
//                 ? "radio-container container_malta"
//                 : "radio-container"
//             }
//           >
//             <input
//               onChange={e => handleQ(e)}
//               type="radio"
//               name="peopleOnMortgage"
//               id="q42"
//               className=""
//               checked={questions.peopleOnMortgage === "two"}
//               value="two"
//             />
//             <label for="q42">Two</label>
//           </div>
//         </Col>
//         {questions.peopleOnMortgage === "two" && (
//           <Col lg={24}>
//             <div className="input">
//               <p className="input-lbl">
//                 What is the First name of Second Applicant ?
//               </p>
//               <input
//                 type="text"
//                 value={questions.firstNameSecondApplicant}
//                 onChange={handleinput}
//                 name="firstNameSecondApplicant"
//                 placeholder="First Name"
//               />
//             </div>
//             <div className="input">
//               <p className="input-lbl">
//                 What is the Surname of Second Applicant ?
//               </p>
//               <input
//                 type="text"
//                 value={questions.lastNameSecondApplicant}
//                 onChange={handleinput}
//                 name="lastNameSecondApplicant"
//                 placeholder="Surname"
//               />
//             </div>
//             <div className="input">
//               <p className="input-lbl">
//                 What is their email? We'll invite them to edit this form with
//                 you
//               </p>
//               <input
//                 type="email"
//                 value={questions.emailSecondApplicant}
//                 onChange={handleinput}
//                 name="emailSecondApplicant"
//                 placeholder="Co-applicant@example.com"
//               />
//             </div>
//             <div className="input">
//               <p className="input-lbl">Type it one more time.</p>
//               <input
//                 type="email"
//                 value={questions.emailSecondApplicantre}
//                 onChange={handleinput}
//                 name="emailSecondApplicantre"
//                 placeholder="Co-applicant@example.com"
//               />
//             </div>
//           </Col>
//         )}
//         <Col lg={10} offset={11}>
//           <div className="btn-div">
//             <Button
//               style={{ height: "40px" }}
//               onClick={() => window.history.back()}
//               className="btn1"
//             >
//               Back
//             </Button>
//             <Button
//               onClick={onsubmitForm}
//               className="btn2"
//               loading={props.financial_data.loading}
//               disabled={
//                 (questions.filedBankruptcy &&
//                   questions.failedToPayLoan &&
//                   questions.purposeOfMortgage &&
//                   questions.peopleOnMortgage === "one") ||
//                 (questions.filedBankruptcy &&
//                   questions.failedToPayLoan &&
//                   questions.purposeOfMortgage &&
//                   questions.peopleOnMortgage === "two" &&
//                   questions.firstNameSecondApplicant &&
//                   questions.lastNameSecondApplicant &&
//                   questions.emailSecondApplicantValidation &&
//                   questions.emailSecondApplicantreValidation)
//                   ? false
//                   : true
//               }
//             >
//               Save & Countinue
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// const mapStateToProps = ({
//   userReducer: {
//     user: { _id }
//   },
//   Financial_data: { loading, error, modal, financial_Health_Check }
// }) => ({
//   financial_data: { loading, error, modal },
//   financial_back_data: financial_Health_Check,
//   userId: _id
// });

// const mapDispatchToProps = dispacth => ({
//   set_financial_BackGround: (props, callback) =>
//     dispacth(Api.financialDataPost(props, callback))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(GetStarted));

// {
//   /* <Col lg={24} className="q1">
// <div onClick={e => clickRadio(e)} className="radio-container">
//   <input
//     onChange={e => handleQ(e)}
//     type="radio"
//     name="failedToPayLoan"
//     id="yes1"
//     className=""
    
//     value="Yes"
//   />
//   <label for="yes1">Yes</label>
// </div>
// <div onClick={clickRadio} className="radio-container">
//   <input
//     onChange={e => handleQ(e)}
//     type="radio"
//     name="failedToPayLoan"
//     id="no1"
//     className=""
//     value="No"
//   />
//   <label for="no1">No</label>
// </div>
// </Col> */
// }
