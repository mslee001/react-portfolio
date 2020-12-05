import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <HashRouter basename="react-portfolio">
      <div>
        <Route exact path="/" component={Home} />
        <Header/>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Footer/>
      </div>
    </HashRouter>

  );
}

export default App;
