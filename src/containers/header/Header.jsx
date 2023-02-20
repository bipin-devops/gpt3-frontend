import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="project1__header section__padding" id="home">
      <div className="project1__header-content">
        <h1 className="gradient__text">
          Lets Build Some Amazing Projects with OpenAI
        </h1>
        <p>
          The OpenAI API can be applied to virtually any task that involves
          understanding or generating natural language or code. We offer a
          spectrum of models with different levels of power suitable for
          different tasks, as well as the ability to fine-tune your own custom
          models.
        </p>
        <div className="project1__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="project1__header-content__people">
          <img src={people} alt="people" />
          <p> Millions of people are already using OpenAI</p>
        </div>
      </div>
      <div className="project1__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
