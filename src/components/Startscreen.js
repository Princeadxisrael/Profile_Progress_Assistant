import React from "react";

const Startscreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h3>Welcome to this interactive testing platform</h3>
      <h4>
        {numQuestions} Questions to help us measure your React proficiency level
      </h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "successful" })}
      >
        start
      </button>
    </div>
  );
};

export default Startscreen;
