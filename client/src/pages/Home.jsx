import React, { useState } from "react";
import "./home.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

const Home = () => {
  return (
    <section className="home">
      <Header />
      <Blog />
      <Blog />
      <Blog />
      <Footer />
    </section>
  );
};

export default Home;
