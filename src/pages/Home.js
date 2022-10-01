import React from 'react';
import Header from '../components/Home/Header';
import Help from '../components/Home/Help';
import Services from "../components/Home/Services";
import Projects from "../components/Home/Projects";
import Feedback from "../components/Home/Feedback";

function Home() {
  return (
    <>
      <Header />
      <Help />
      <Services />
      <Projects />
      <Feedback />
    </>
  )
}

export default Home