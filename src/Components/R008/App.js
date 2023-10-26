/**
 * source code: https://github.com/chrisblakely01/quiz-app
 * article: https://jschris.com/beginner-react-project-quiz-app-using-hooks
 */
import React, { useState } from 'react';
import { jsonData } from "../../Data/data";
import Quizzes from "../../Data/quizzes";

function App() {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = question + 1;
    if (nextQuestion < Quizzes.length) {
      setQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className='quiz-container flex-center'>
      {showScore ? (
        <div className='score-section'>
          Your score {score} out of {Quizzes.length}
        </div>
      ) : (
        <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {question + 1}</span> / {Quizzes.length}
          </div>
          <div className='question-text'>
            {Quizzes[question].question}
          </div>
        </div>
        <div className='answer-section'>
          {Quizzes[question].answers.map((item) => (
            <button onClick={() => {handleAnswer(item.isCorrect)}}>{item.option}</button>
          ))}
        </div>
        </>
      )}
    </div>
  )
}

export default function R008() {
    return (
      <div className='flex-center'>
        <h3 className="center subtitle">Project: {jsonData[7].projectName}</h3>
        <App style={{backgroundColor: "#7cc6fe"}} />
      </div>
    );
  }
  
  