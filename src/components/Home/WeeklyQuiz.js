
import React, { useState, useEffect } from "react";
import questions from "./questionbank.json";
import SingleQuestionQuiz from "./SingleQuiz";

const WeeklyQuiz = () => {
  const [weeklyQuestions, setWeeklyQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getWeeklySeed = () => {
      const weekStart = Math.floor(Date.now() / (1000 * 60 * 60 * 168));
      return weekStart;
    };

    const shuffleArray = (array, seed) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = (i + seed) % shuffled.length;
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const seed = getWeeklySeed();
    const shuffled = shuffleArray(questions, seed);
    setWeeklyQuestions(shuffled.slice(0, 3));
  }, []);

  const handleNext = () => {
    if (currentIndex < weeklyQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section style={{ backgroundColor: "#edf6f9", padding: "4rem 1rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontWeight: "bold", color: "#1d3557" }}>🧠 Our Quiz Corner</h2>
        <p style={{ color: "#6c757d" }}>Test your skills! You only get 3 questions per week.</p>
      </div>

      {weeklyQuestions.length > 0 && (
        <SingleQuestionQuiz
          question={weeklyQuestions[currentIndex]}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </section>
  );
};

export default WeeklyQuiz;
