import React, { Component } from "react";
import './App.css';
import DropDown from './components/dropDown'
import SubmitMeme from './components/submitMeme'

function App() {

  return (
    <div>
      <main className="container">
      <div className="memeGen">
          <DropDown />
          <SubmitMeme />
        </div>
      </main>
</div>
  );
}

export default App;
