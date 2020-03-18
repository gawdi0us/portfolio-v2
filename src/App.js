import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
// import { Gitstats } from './components/Gitstats';
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
            <Route path="/skills" component={Skills} />

            <Route path="/projects" component={Portfolio} />
          </Route>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
