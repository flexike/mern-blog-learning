import React, { useState } from "react";
import "./home.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = () => {
  const [author, setAuthor] = useState("author");
  const [date, setDate] = useState("date");
  const [blogTitle, setBlogTitle] = useState("Blog Title");
  const [blogDescription, setBlogDescription] = useState("Blog Description");

  return (
    <section className="home">
      <Header />
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

          <div className="blog-card">
            <img
              src="https://media.istockphoto.com/id/1162040662/vector/vector-superhero-silhouette-with-sunburst-effect-background.jpg?s=612x612&w=0&k=20&c=NyvKS97BiIyoZ4Z75Sd7Iptc9BTckQQNep91MGhuRmo="
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
      <Footer />
    </section>
  );
};

export default Home;
