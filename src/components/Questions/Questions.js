import React, { useState } from "react";
import "./questions.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const initialQuestions = [
  {
    question: "What is YORE Care?",
    answer:
      "YORE Care is a mobile application that allows users to create their ABHA ID, which is a secure and NHA (National Health Authority) approved identification for accessing healthcare services. YORE Care also provides various other features to enhance your healthcare experience.",
    isExpanded: false,
  },
  {
    question: "Is it safe to create an ABHA ID through the YORE Care app?",
    answer:
      "Yes, it is completely safe to create an ABHA ID using the YORE Care app. We prioritize the security and privacy of our users. All data stored in the app is kept confidential and is not shared with anyone.",
    isExpanded: false,
  },
  {
    question: "Can local medical shops partner with YORE Care?",
    answer:
      "Yes, YORE Care welcomes partnerships with local medical shops. By partnering with us, medical shops can provide convenient online medicine ordering services to their customers through our app.",
    isExpanded: false,
  },
];

function Questions() {
  const [questions, setQuestions] = useState(initialQuestions);

  const toggleExpansion = (index) => {
    const newQuestions = questions.map((question, i) => ({
      ...question,
      isExpanded: i === index ? !question.isExpanded : false,
    }));
    setQuestions(newQuestions);
  };

  return (
    <div className="questions-container">
      <div className="question-header">
        <h1 style={{ padding: "4rem 0 0 20rem" }}>
          Frequently Asked Questions
        </h1>
      </div>

      {questions.map((question, index) => (
        <div
          key={index}
          className={`question-answer-container ${
            question.isExpanded ? "expanded" : ""
          }`}
          onClick={() => toggleExpansion(index)}
        >
          <div className="question">
            <div className="toggle-icon">
              <div className="question-text">
                <h5 style={{ fontFamily: "Baloo Bhai 2" }}>
                  {question.question}
                </h5>
              </div>
              <div>
                {question.isExpanded ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </div>
            </div>
            {question.isExpanded && <p>{question.answer}</p>}
          </div>
        </div>
      ))}

      <h5 className="view-more">View More</h5>
    </div>
  );
}

export default Questions;
