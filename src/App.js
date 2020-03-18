import React from 'react';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
// import { Gitstats } from './components/Gitstats';
import { Footer } from './components/Footer';
import FadeIn from 'react-fade-in';
function App() {



  return (
    <div className="App">
      <div className="container">
      <Nav />
    
       <Header />
 
      <Skills />
      
      {/* <Portfolio /> */}
     
     <Footer />

    </div>
    </div>
  );
}

export default App;
