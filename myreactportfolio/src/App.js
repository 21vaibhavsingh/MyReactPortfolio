import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Vaibhav Pratap Singh</h1>
        <p>Web Developer | React Enthusiast | Tech Explorer</p>
      </header>
      <About />
      <Projects />
      <Contact />
      <footer>© 2025 Vaibhav Pratap Singh</footer>
    </div>
  );
}

export default App;
