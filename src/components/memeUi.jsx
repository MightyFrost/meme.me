import React, { Component } from "react";
import MemeDisplay from "./memeDisplay";
import ShareTo from "./shareTo";
import SubmitMeme from "./submitMeme";

class MemeUi extends React.Component {
  state = {
    isLoading: true,
    memes: [],
    error: null
  };

  fetchMemes() {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(response => response.json())
      .then(data => {this.setState({
        memes: data.data.memes,
        isLoading: false,});
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchMemes();
    //this.updateState();
  }

  render() {

    return (
      <React.Fragment>
        <div className="memeGen">
          <MemeDisplay />
          <SubmitMeme />
          <ShareTo />
        </div>
      </React.Fragment>
    );
  }
}

export default MemeUi;
