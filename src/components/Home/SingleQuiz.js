import React, { useState } from "react";

const SingleQuestionQuiz = ({ question, onNext, onBack }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [locked, setLocked] = useState(false);

  const handleAnswer = (option) => {
    if (locked) return;

    setSelectedOption(option);
    const isCorrect = option === question.answer;

    if (isCorrect) {
      setFeedback("✅ Wow!, you will make a good Radiographer!");
      setLocked(true);
    } else {
      if (attempts === 0) {
        setFeedback("❌ Oooops! You’re very close to the answer, try again.");
        setAttempts(1);
      } else {
        setFeedback("🚨 The answer will be given in class. Join a class today.");
        setLocked(true);
      }
    }
  };

  // Reset the state when the question changes
  React.useEffect(() => {
    setSelectedOption(null);
    setAttempts(0);
    setFeedback("");
    setLocked(false);
  }, [question]); // This effect runs when the question changes

  return (
    <div style={{
      border: "2px solid #eee",
      padding: "2rem",
      borderRadius: "12px",
      backgroundColor: "#f9fcff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      maxWidth: "600px",
      margin: "auto"
    }}>
      <h4 style={{ marginBottom: "1.5rem", color: "#1d3557" }}>{question.question}</h4>
      
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option)}
          disabled={locked}
          style={{
            display: "block",
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            color: 'black',
            borderRadius: "8px",
            backgroundColor: selectedOption === option ? "#a8dadc" : "#ffffff",
            border: "1px solid #ccc",
            cursor: "pointer",
            fontWeight: "500"
          }}
        >
          {option}
        </button>
      ))}

      {feedback && (
        <div style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#fff3cd",
          borderRadius: "8px",
          fontWeight: "600"
        }}>
          {feedback}
        </div>
      )}

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={onBack}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#6c757d",
            color: "#fff",
            width: '100px'
          }}
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!locked}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#1d3557",
            color: "#fff",
            width: '100px'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SingleQuestionQuiz;
