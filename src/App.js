import React from 'react';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';

function App() {

  const containerStyle = {
    width: "100%",
  }

  return (
    <div className="App">
      <div className="container" style={containerStyle}>
      <Nav />
      <Header />
      <Portfolio />
      <Skills />
    </div>
    </div>
  );
}

export default App;
