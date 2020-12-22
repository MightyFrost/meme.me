import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import MemeUi from './components/memeUi'
import SubmitMeme from './components/submitMeme';
import ShareTo from './components/shareTo';
import InputField from "./components/inputField";

function App() {
  return (
    <div>
      
      <main className="container">
      <MemeUi />

      </main>
</div>
  );
}

export default App;
