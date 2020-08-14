import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>This is my Portfolio</h1> */}
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
