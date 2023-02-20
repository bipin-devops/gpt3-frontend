import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatProject1.css";

const WhatProject1 = () => {
  return (
    <div className="project1__whatproject1 section__margin" id="wproject1">
      <div className="project1__whatproject1-feature">
        <Feature
          title="what is GPT3"
          text="GPT-3 is a language model that leverages deep learning to generate human-like text (output). Not only can it produce text, but it can also generate code, stories, poems, and many more."
        />
      </div>
      <div className="project1__whatproject1-heading">
        <h1 className="gradient__text">
          The posibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="project1__whatproject1-container">
        <Feature title="Chatbox" text="You can talk to GPT-3" />
        <Feature
          title="Knowledgebase"
          text="The knowledge base of GPT-3 is huge"
        />
        <Feature title="Education" text="Anyone can use GPT-3 APIs" />
      </div>
    </div>
  );
};

export default WhatProject1;
