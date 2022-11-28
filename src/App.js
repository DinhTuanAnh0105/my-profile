import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header/index"
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import './index.css';

const App = () => {
  return (
  <div>
    <Header />
    <Banner />
    <Profile />
    <Skills />
  </div>
  )
};

export default App;
