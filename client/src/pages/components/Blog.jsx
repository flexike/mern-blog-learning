import React, { useState } from "react";
import "./blog.sass";

const Blog = () => {
  const [author, setAuthor] = useState("author");
  const [date, setDate] = useState("date");
  const [blogTitle, setBlogTitle] = useState("Blog Title");
  const [blogDescription, setBlogDescription] = useState("Blog Description");

  return (
    <div className="container">
      <div className="home-content">
        <div className="blog-card">
          <img
            src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"
            alt="Blog's img"
          />
          <div className="blog-right-side">
            <h2>{blogTitle}</h2>
            <div>
              <h3>{author}</h3>
              <h3>{date}</h3>
            </div>
            <p>{blogDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
