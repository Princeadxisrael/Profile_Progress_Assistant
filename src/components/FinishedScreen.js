import React from "react";

const FinishedScreen = ({ points, maxNumOfPoints, highscore }) => {
  const percentage = (points / maxNumOfPoints) * 100;

  return (
    <>
      <p className="result">
        you scored <strong>{points} </strong>out of {maxNumOfPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
};

export default FinishedScreen;
