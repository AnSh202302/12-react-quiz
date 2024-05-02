import { useCallback, useState } from "react";
import DATA from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === DATA.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        index={activeQuestionIndex}
      />
    </div>
  );
}
