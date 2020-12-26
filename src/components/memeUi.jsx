import React, { Component } from "react";
import DropDown from "./dropDown";
import ShareTo from "./shareTo";
import SubmitMeme from "./submitMeme";

class MemeUi extends React.Component {

  render() {

    return (
      <React.Fragment>
        <div className="memeGen">
          <DropDown />
          <SubmitMeme />
        </div>
      </React.Fragment>
    );
  }
}

export default MemeUi;
