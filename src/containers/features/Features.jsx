import React from "react";
import { Feature } from "../../components";

import "./features.css";

const feturesData = [
  {
    title: "Make Improvement",
    text: "Improve your project by integrating GPT-3 APIs",
  },
  {
    title: "Become Active",
    text: "Lets make something by using gpt-3",
  },
  {
    title: "Message or am nothing",
    text: "Conversation is one of the best feature of gpt ",
  },
  {
    title: "Law enforcement and governance",
    text: "It  is completely safe to use GPT-3",
  },
];

const Features = () => {
  return (
    <div className="project1__features section__padding" id="features">
      <div className="project1__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize it. Make it Possible
          With Us.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="project1__features-container">
        {feturesData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
