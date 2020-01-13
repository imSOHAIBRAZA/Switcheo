import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import { withRouter } from "react-router-dom";
import "./backGround.css";
import Api from "../../../redux/api/financialHealthCheck";
import { connect } from "react-redux";

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function BackGround(props) {
  const [questions, setQuestions] = useState({
    // filedBankruptcy: "",
    // filedBankruptcyValidation: false,
    // filedBankruptcyHelp: "",
    // filedBankruptcyValidationStatus: "error",

    // failedToPayLoan: "",
    // failedToPayLoanValidation: false,
    // failedToPayLoanHelp: "",
    // failedToPayLoanValidationStatus: "error",

    purposeOfMortgage: "",
    purposeOfMortgageValidation: "",
    purposeOfMortgageHelp: "",
    purposeOfMortgageValidationStatus: "error",

    peopleOnMortgage: "one",

    firstNameSecondApplicant: "",
    lastNameSecondApplicant: "",

    emailSecondApplicant: "",
    emailSecondApplicantValidation: false,
    emailSecondApplicantHelp: "",
    emailSecondApplicantValidationStatus: "error",

    emailSecondApplicantre: "",
    emailSecondApplicantreValidation: false,
    emailSecondApplicantreHelp: "",
    emailSecondApplicantreValidationStatus: "error"
  });

  const [q4, setQ4] = useState(false);
  function clickRadio(e) {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  }

  const validateRadio = (name, value) => {
    switch (name) {
      case "filedBankruptcy":
      case "failedToPayLoan":
      case "purposeOfMortgage":
        if (value === "") {
          setQuestions({
            ...questions,
            [name]: value,
            [`${name}Validation`]: "error",
            [`${name}Help`]: "please Select one of above",
            [`${name}ValidationStatus`]: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            [`${name}Validation`]: "success",
            [`${name}Help`]: "",
            [`${name}ValidationStatus`]: true
          });
        }
        break;
      case "emailSecondApplicant":
        if (!emailPattern.test(value)) {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantValidationStatus: "error",
            emailSecondApplicantHelp: "You email is not valid",
            emailSecondApplicantValidation: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantValidationStatus: "success",
            emailSecondApplicantHelp: "",
            emailSecondApplicantValidation: true
          });
        }
        break;
      case "emailSecondApplicantre":
        if (value !== questions.emailSecondApplicant) {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantreValidationStatus: "error",
            emailSecondApplicantreHelp: "You email is not match",
            emailSecondApplicantreValidation: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantreValidationStatus: "success",
            emailSecondApplicantreHelp: "",
            emailSecondApplicantreValidation: true
          });
        }
        break;
    }
  };
  var handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    var qs = questions;
    qs[e.target.name] = e.target.value;
    setQ4(!q4);
    validateRadio(e.target.name, e.target.value);
    for (var i = 0; i < radioContainers.length; i++) {
      var input = radioContainers[i].childNodes[0];
      if (input.checked) {
        input.parentNode.style.background = "#fb9500";
        input.parentNode.style.border = "2px solid #fb9500";
      } else {
        input.parentNode.style.background = "lightgray";
        input.parentNode.style.border = "2px solid gray";
      }
    }
  };

  const handleinput = e => {
    if (
      e.target.name === "emailSecondApplicant" ||
      e.target.name === "emailSecondApplicantre"
    ) {
      validateRadio(e.target.name, e.target.value);
    } else {
      setQuestions({ ...questions, [e.target.name]: e.target.value });
    }
    if (e.target.value !== "") {
      e.target.style.background = "#fb9500";
      e.target.style.border = "2px solid #fb9500";
    } else {
      e.target.style.background = "lightgray";
      e.target.style.border = "2px solid gray";
    }
  };
  useEffect(() => {
    if (props.financial_back_data !== "") {
      const {
        filedBankruptcy,
        failedToPayLoan,
        purposeOfMortgage,
        peopleOnMortgage,
        firstNameSecondApplicant,
        lastNameSecondApplicant,
        emailSecondApplicant
      } = props.financial_back_data;

      setQuestions({
        ...questions,
        filedBankruptcy,
        failedToPayLoan,
        purposeOfMortgage,
        peopleOnMortgage,
        firstNameSecondApplicant,
        lastNameSecondApplicant,
        emailSecondApplicant,
        emailSecondApplicantreValidationStatus: "success",
        emailSecondApplicantreHelp: "",
        emailSecondApplicantreValidation: true,
        emailSecondApplicantValidationStatus: "success",
        emailSecondApplicantHelp: "",
        emailSecondApplicantValidation: true
      });
    }
  }, [props.filedBankruptcy]);

  const onsubmitForm = () => {
    const {
      filedBankruptcy,
      failedToPayLoan,
      purposeOfMortgage,
      peopleOnMortgage,
      firstNameSecondApplicant,
      lastNameSecondApplicant,
      emailSecondApplicant
    } = questions;
    const sigle = {
      filedBankruptcy,
      failedToPayLoan,
      purposeOfMortgage,
      peopleOnMortgage
    };
    const double = {
      filedBankruptcy,
      failedToPayLoan,
      purposeOfMortgage,
      peopleOnMortgage,
      firstNameSecondApplicant,
      lastNameSecondApplicant,
      emailSecondApplicant
    };
    console.log(questions);
    if (peopleOnMortgage === "two") {
      props.set_financial_BackGround(
        {
          userId: props.userId,
          applicants: {
            ...props.financial_back_data,
           ...double
          }
        },
        callback
      );
    } else {
      props.set_financial_BackGround(
        {
          userId: props.userId,
          applicants: {
            ...props.financial_back_data,
            ...sigle
          }
        },
        callback
      );
    }
  };
  const callback = () => {
    props.history.push("/home/relatedInformation");
    props.present && props.changeProfRout("property");
  };

  return (
    <div className="financial-health">
      <Row className="fh-row-gs">
       
        <Col lg={24} className="col3">
          <p className="heading3">What is the mortgage for?</p>
        </Col>
        <Col lg={24} className="q1 q3">

        <InputContainer question={questions.purposeOfMortgage} 
                        label="First Time Buyer" 
                        onIconClick={clickRadio} 
                      >
            <Input inputOnChange={e => handleQ(e)} 
                    name="purposeOfMortgage" 
                    id="mortf" 
                    question={questions.purposeOfMortgage}
                    label="First Time Buyer"
            />
        </InputContainer>
         
          <InputContainer question={questions.purposeOfMortgage} 
                        label="House Mover" 
                        onIconClick={clickRadio} 
                      >
            <Input inputOnChange={e => handleQ(e)} 
                    name="purposeOfMortgage" 
                    id="mortf1" 
                    question={questions.purposeOfMortgage}
                    label="House Mover"
            />
        </InputContainer>
          <InputContainer question={questions.purposeOfMortgage} 
                        label="First Time Buyer" 
                        onIconClick={clickRadio} 
                      >
            <Input inputOnChange={e => handleQ(e)} 
                    name="purposeOfMortgage" 
                    id="mortf" 
                    question={questions.purposeOfMortgage}
                    label="First Time Buyer"
            />
        </InputContainer>
        <InputContainer question={questions.purposeOfMortgage} 
                        label="First Time Buyer" 
                        onIconClick={clickRadio} 
                      >
            <Input inputOnChange={e => handleQ(e)} 
                    name="purposeOfMortgage" 
                    id="mortf" 
                    question={questions.purposeOfMortgage}
                    label="First Time Buyer"
            />
        </InputContainer>
        <InputContainer question={questions.purposeOfMortgage} 
                        label="First Time Buyer" 
                        onIconClick={clickRadio} 
                      >
            <Input inputOnChange={e => handleQ(e)} 
                    name="purposeOfMortgage" 
                    id="mortf" 
                    question={questions.purposeOfMortgage}
                    label="First Time Buyer"
            />
        </InputContainer>
        <InputContainer question={questions.purposeOfMortgage} 
                        label="First Time Buyer" 
                        onIconClick={clickRadio} 
                      >
            <Input inputOnChange={e => handleQ(e)} 
                    name="purposeOfMortgage" 
                    id="mortf" 
                    question={questions.purposeOfMortgage}
                    label="First Time Buyer"
            />
        </InputContainer>
        <InputContainer question={questions.purposeOfMortgage} 
                        label="First Time Buyer" 
                        onIconClick={clickRadio} 
                      >
            <Input inputOnChange={e => handleQ(e)} 
                    name="purposeOfMortgage" 
                    id="mortf" 
                    question={questions.purposeOfMortgage}
                    label="First Time Buyer"
            />
        </InputContainer>
        <InputContainer question={questions.purposeOfMortgage} 
                        label="First Time Buyer" 
                        onIconClick={clickRadio} 
                      >
            <Input inputOnChange={e => handleQ(e)} 
                    name="purposeOfMortgage" 
                    id="mortf" 
                    question={questions.purposeOfMortgage}
                    label="First Time Buyer"
            />
        </InputContainer>
        )}
        <Col lg={10} offset={11}>
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => window.history.back()}
              className="btn1"
            >
              Back
            </Button>
            <Button
              onClick={onsubmitForm}
              className="btn2"
              loading={props.financial_data.loading}
              disabled={
                (questions.filedBankruptcy &&
                  questions.failedToPayLoan &&
                  questions.purposeOfMortgage &&
                  questions.peopleOnMortgage === "one") ||
                (questions.filedBankruptcy &&
                  questions.failedToPayLoan &&
                  questions.purposeOfMortgage &&
                  questions.peopleOnMortgage === "two" &&
                  questions.firstNameSecondApplicant &&
                  questions.lastNameSecondApplicant &&
                  questions.emailSecondApplicantValidation &&
                  questions.emailSecondApplicantreValidation)
                  ? false
                  : true
              }
            >
              Save & Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
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
  set_financial_BackGround: (props, callback) =>
    dispacth(Api.financialDataPost(props, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BackGround));


{/* <Input inputOnChange={e => handleQ(e)} name="purposeOfMortgage" id="mortf" question={questions.purposeOfMortgage}
label="First Time Buyer"
/> */}
const Input = ({inputOnChange, name,id,question, label})=>{

  return(
    <>
      <input
              onChange={inputOnChange}
              type="radio"
              name={name}
              id={id}
              className=""
              checked={question === label}
              value={label}
            />
            <label for="mortf">{label}</label>
            </>
  )
}

{/* <InputContainer question={questions.purposeOfMortgage} label="First Time Buyer" >
<input
              onChange={e => handleQ(e)}
              type="radio"
              name="purposeOfMortgage"
              id="mortf"
              className=""
              checked={questions.purposeOfMortgage === "First Time Buyer"}
              value="First Time Buyer"
            />
            <label for="mortf">First Time Buyer</label>
 </InputContainer> */}

const InputContainer = ({ label, children,question , onIconClick }) => {

    const containerStyle = question === label ? "radio-container container_malta" : "radio-container";
    return (
    <div className={containerStyle} onClick={e=>onIconClick(e)}>
            {children}
    </div>)
};

