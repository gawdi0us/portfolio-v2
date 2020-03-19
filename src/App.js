import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
// import { Gitstats } from './components/Gitstats';
import { Contact } from './components/Contact';
import { Footer } from "./components/Footer";

import FadeIn from "react-fade-in";
import "./global/react-transitions.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Nav />
          <Header />
          <Route>
            <Route exact path="/skills" component={Skills} />

            <Route exact path="/projects" component={Portfolio} />
          </Route>
        </div>
      </div>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
