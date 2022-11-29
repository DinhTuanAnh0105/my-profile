import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header/index"
import Profile from "./components/Profile";
import Project from "./components/Project";
import Skills from "./components/Skills";
import './index.css';

const App = () => {
  return (
  <div>
    <Header />
    <Banner />
    <Profile />
    <Skills />
    <Project />
    <Footer />
  </div>
  )
};

export default App;
