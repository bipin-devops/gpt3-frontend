import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="project1__possibility section__padding" id="possibility">
      <div className="project1__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="project1__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          GPT-3 can help you write codes by generating and completing your
          code(Codex model). It can be used in many projects and products to
          achieve many things like translating conventional language into formal
          computer code, generating query-specific coe SQL processing, and many
          more.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
