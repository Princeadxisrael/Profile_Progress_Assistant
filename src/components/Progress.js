import React from "react";

const Progress = ({ index, maxNumOfPoints, answer, points, numQuestions }) => {
  return (
    <>
      <header className="progress">
        <progress
          max={numQuestions}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Question <strong>{index + 1}</strong> /{numQuestions}
        </p>

        <p>
          Points <strong>{points}</strong> /{maxNumOfPoints}
        </p>
      </header>
    </>
  );
};

export default Progress;
