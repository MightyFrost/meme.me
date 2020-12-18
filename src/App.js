import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import MemeUi from './components/memeUi'
import SubmitMeme from './components/submitMeme';
import ShareTo from './components/shareTo';

function App() {
  return (
    <div>
      <MemeUi />
      <main className="container">
        {/* <SubmitMeme />
        <ShareTo /> */}
      </main>
</div>
  );
}

export default App;
