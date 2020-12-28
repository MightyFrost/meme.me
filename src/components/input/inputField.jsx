import React, { Component, useState } from 'react';
import DropDown from '../dropDown'
import Axios from 'axios';
import PopUp from '../popUp'
import { StyledTextField, StyledButton } from './inputStyling';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meme_url: '',
      img_url: '',
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleTextInput = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }


  submitToPost = () => {
    let list = this.props.boxCount;
    let listed = [...Array.from(Array(list)).keys()];
    let FormData = require('form-data');
    let data = new FormData();
    data.append('template_id', this.props.templateId);
    data.append('username', 'MightyTesting');
    data.append('password', 'arschgeige');
    listed.map(item => {
      data.append(`boxes[${item}][text]`, this.state["value" + item].toUpperCase());
    })
    // If you are running into CORS errors, please install the "Allow CORS" extension,
    // or change the URL to 'https://cors-anywhere.herokuapp.com/https://api.imgflip.com/caption_image'
    Axios.post('https://api.imgflip.com/caption_image', data)
      .then((response) => {
        // console.log(response);
        // console.log(data);
        this.setState({ meme_url: response.data.data.page_url, showPopup: !this.state.showPopup, img_url: response.data.data.url })
        // console.log(this.state)
        this.createPopup();
      }, (error) => {
        console.log(error);
        ;
      });
  }

  createPopup() {
    if (this.state.meme_url != undefined) {
      return (<PopUp />)
    } else {
      console.log("There is no meme :(")
    }
  }



  render() {
    let list = this.props.boxCount;
    let listed = [...Array.from(Array(list)).keys()]
    let width = { width: '100%' };

    const submitVisibility = () => {
      if (list >= 1) { return (<StyledButton variant="outlined" type="button" onClick={this.submitToPost}>Submit</StyledButton>) }
    }

    const howMany = () => {
      if (this.props.boxCount <= 0) {
        return (<p>Please select a meme from the dropdown.</p>)
      } else {
        return (
          listed.map(item => (
            <StyledTextField style={width} className="input-field"
              key={item}
              value={this.state["value" + item]}
              onChange={this.handleTextInput}
              className={"outlined-read-only-input"}
              label={"Input field " + (item + 1)}
              variant="outlined"
              name={"value" + (item)}
            />

          ))
        );
      }
    }

    const displayPopup = this.state.showPopup ?
      <PopUp
        text='Click "Close Button" to hide popup'
        closePopup={this.togglePopup.bind(this)}
        imgUrl={this.state.img_url} 
        generatedMeme={this.state.meme_url}
      />
      : null;

    return (<div className="input">
      <ul>
        {howMany()}</ul>
      {submitVisibility()}
      {displayPopup}
    </div>

    );
  }
}
export default InputField;