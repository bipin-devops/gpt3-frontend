import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="project1__blog section__padding" id="blog">
      <div className="project1__blog-heading">
        <h1 className="gradient__text">
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className="project1__blog-container">
        <div className="project1__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="August 20, 2022"
            title="Starting A Major Project with OpenAi"
          />
        </div>
        <div className="project1__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="August 20, 2022"
            title="Starting A Major Project with OpenAi"
          />
          <Article
            imgUrl={blog03}
            date="August 20, 2022"
            title="Starting A Major Project with OpenAi"
          />
          <Article
            imgUrl={blog04}
            date="August 20, 2022"
            title="Starting A Major Project with OpenAi"
          />
          <Article
            imgUrl={blog05}
            date="August 20, 2022"
            title="Starting A Major Project with OpenAi"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
