import React from "react";

const Startscreen = ({ numQuestions }) => {
  return (
    <div className="start">
      <h3>Welcome to your profile building assistant</h3>
      <h4>{numQuestions} Questions to help us build your profile</h4>
      <button>start</button>
    </div>
  );
};

export default Startscreen;
