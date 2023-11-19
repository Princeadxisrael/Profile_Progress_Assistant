import React from "react";
import ResetButton from "./ResetButton";

const FinishedScreen = ({ points, maxNumOfPoints, highscore, dispatch }) => {
  const percentage = (points / maxNumOfPoints) * 100;

  return (
    <>
      <p className="result">
        you scored <strong>{points} </strong>out of {maxNumOfPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <div>
        <ResetButton dispatch={dispatch} />
      </div>
    </>
  );
};

export default FinishedScreen;
