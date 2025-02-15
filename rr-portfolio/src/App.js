import React from "react";
import "./App.css";
import resumeData from "./resumeData";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
