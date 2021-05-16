import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import logo from './logo.svg';

const buttonClick = (p?: string) => {
  console.log("Button is click");
  console.log("Button is click with param: " + p);
}

function App() {
  const isTrue = true;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
