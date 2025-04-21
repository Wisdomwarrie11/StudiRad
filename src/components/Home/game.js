// Girlie Game Prototype (React + Bootstrap)
// This is a simplified version to demonstrate key features.

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const questions = {
  english: [
    {
      level: 1,
      questions: [
        {
          text: "A young girl is offered a drink by a stranger at a party. What should she do?",
          options: [
            "Say thank you and take it",
            "Ask what's in it first or avoid it",
            "Take it because it's rude to refuse"
          ],
          answer: 1
        },
        {
          text: "If a friend is being forced to marry early, what's a good first step?",
          options: [
            "Stay out of it",
            "Tell a trusted adult or authority",
            "Encourage her to accept it for peace"
          ],
          answer: 1
        },
        {
          text: "Which of these can prevent unplanned pregnancy?",
          options: ["Condoms", "Painkillers", "Drinking salt water"],
          answer: 0
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          text: "Your friend says her boyfriend refuses to use protection. What advice should you give?",
          options: [
            "Do what he wants to keep the relationship",
            "Refuse and explain it's about mutual respect and safety",
            "Don't say anything"
          ],
          answer: 1
        },
        {
          text: "What is a sign that someone may be in an abusive relationship?",
          options: [
            "They are always happy",
            "They have bruises and are afraid to talk",
            "They wear makeup"
          ],
          answer: 1
        }
      ]
    }
  ],
  pidgin: [
    {
      level: 1,
      questions: [
        {
          text: "One guy give small girl drink for party. Wetin she go do?",
          options: ["Collect am sharp sharp", "Ask wetin dey inside or waka go", "Na bad thing to reject drink"],
          answer: 1
        },
        {
          text: "If your padi wan force marry early, wetin good to do?",
          options: ["No put mouth", "Tell better adult or person wey fit help", "Make she just manage am"],
          answer: 1
        },
        {
          text: "Which one fit stop belle wey person no plan?",
          options: ["Condom", "Paracetamol", "Salt water"],
          answer: 0
        }
      ]
    },
    {
      level: 2,
      questions: [
        {
          text: "Your friend talk say her guy no wan use condom. Wetin you go tell am?",
          options: ["Do wetin the guy want", "Make she say no and explain say safety dey important", "No talk anything"],
          answer: 1
        },
        {
          text: "Wetin fit show say person dey inside abusive relationship?",
          options: ["Dem dey always smile", "Dem get bruises and dey fear to talk", "Dem dey use makeup"],
          answer: 1
        }
      ]
    },
    {
      level: 3,
      questions: [
        {
          text: "One girl dey bleed steady after belle. She no wan go clinic. Wetin she suppose do?",
          options: ["Take herbs", "Go health center sharp", "Sleep and wait make e stop"],
          answer: 1
        },
        {
          text: "Your padi say she no wan born now. Wetin she fit do?",
          options: ["Use reliable contraceptive", "Drink salt water after action", "Pray say belle no come"],
          answer: 0
        }
      ]
    },
    {
      level: 4,
      questions: [
        {
          text: "One uncle dey touch girl anyhow for house. Wetin she fit do?",
          options: ["Shout, run, and report to trusted person", "Keep quiet", "Just no enter house again"],
          answer: 0
        },
        {
          text: "If girl don reach puberty, wetin she suppose sabi?",
          options: ["Say period na curse", "Understand body changes and hygiene", "Hide am from everybody"],
          answer: 1
        }
      ]
    },
    {
      level: 5,
      questions: [
        {
          text: "Girl go chemist ask for pad, dem laugh her. Wetin she go do?",
          options: ["Walk out with pride, period no be shame", "Cry go house", "Stop to use pad"],
          answer: 0
        },
        {
          text: "Which one correct about sex education?",
          options: ["Na only married people suppose hear am", "E good make young people sabi for protection", "Na taboo"],
          answer: 1
        }
      ]
    }
  ]
};

const GameApp = () => {
  const [language, setLanguage] = useState("");
  const [avatarName, setAvatarName] = useState("");
  const [stage, setStage] = useState("");
  const [level, setLevel] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const startGame = () => {
    setLevel(1);
    setQuestionIndex(0);
  };

  const handleAnswer = (selectedIndex) => {
    const current = questions[language][level - 1].questions[questionIndex];
    if (selectedIndex === current.answer) setScore(score + 1);

    if (questionIndex + 1 < questions[language][level - 1].questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (level < 5) {
        setLevel(level + 1);
        setQuestionIndex(0);
      } else {
        setCompleted(true);
      }
    }
  };

  if (!language) {
    return (
      <div className="container text-center mt-5">
        <h3>Select Language</h3>
        {["english", "pidgin"].map((lang) => (
          <button key={lang} onClick={() => setLanguage(lang)} className="btn btn-primary m-2">
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  if (!avatarName) {
    return (
      <div className="container text-center mt-5">
        <h3>Name Your Avatar</h3>
        <input type="text" onChange={(e) => setAvatarName(e.target.value)} className="form-control mb-3" />
        <h5>Choose your stage</h5>
        {["Chill Girl", "Steezy Girl", "Sharp Girl", "Cutie Girl"].map((s) => (
          <button key={s} onClick={() => setStage(s)} className="btn btn-info m-1">
            {s}
          </button>
        ))}
      </div>
    );
  }

  if (!stage) {
    return (
      <div className="container text-center mt-5">
        <h5>Select your stage</h5>
        {["Chill Girl", "Steezy Girl", "Sharp Girl", "Cutie Girl"].map((s) => (
          <button key={s} onClick={() => setStage(s)} className="btn btn-info m-1">
            {s}
          </button>
        ))}
      </div>
    );
  }

  if (completed) {
    const voucher = Math.floor(Math.random() * 1000000);
    return (
      <div className="container text-center mt-5">
        <h3>🎉 Congrats, {avatarName}!</h3>
        <p>You completed the game as a {stage}!</p>
        <p>You've won a free pack of pads. Use voucher code:</p>
        <h4 className="text-success">GIRLIE-{voucher}</h4>
        <p>Collect from nearest health center.</p>
      </div>
    );
  }

  const currentQ = questions[language][level - 1].questions[questionIndex];
  return (
    <div className="container mt-5">
      <h4>{avatarName} the {stage}</h4>
      <h5>Level {level} - Question {questionIndex + 1}</h5>
      <p>{currentQ.text}</p>
      {currentQ.options.map((opt, idx) => (
        <button key={idx} onClick={() => handleAnswer(idx)} className="btn btn-outline-dark m-1 d-block">
          {opt}
        </button>
      ))}
    </div>
  );
};

export default GameApp;
