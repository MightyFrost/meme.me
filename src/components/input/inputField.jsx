import React, { Component, useState } from 'react';
import DropDown from '../dropDown'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import styled from 'styled-components';
import Axios from 'axios';
import PopUp from '../popUp'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      padding: 1,
      width: '100%',
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}
));

const StyledTextField = styled(TextField)`
label.Mui-focused {
color: white;
}
.MuiInputBase-root .MuiOutlinedInput-root .MuiInputBase-formControl {
  min-width: 100%;
}
.MuiOutlinedInput-input {
padding: 12px 14px;
}
.MuiOutlinedInput-root {
fieldset {
  border-color: gray;
}
&:hover fieldset {
  border-color: #a7aaae;
}
&.Mui-focused fieldset {
  border-color: #a7aaae;
}
}
.MuiInputBase-input {
  color: #a7aaae;
}
.MuiFormLabel-root {
  color: #a7aaae;
}
.MuiInputBase-root {
  margin: 7px 0px;
}
.MuiInputLabel-outlined.MuiInputLabel-shrink {
  transform: translate(14px, 4px) scale(0.75);
}

`;

const StyledButton = withStyles({
  root: {
    color: 'inherit',
    width: '100%',
    margin: '10px 0 0 0',
    'border-color': '#a7aaae',
  }
})(Button);

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meme_url: '',
      select_meme: 'Please select a meme from the dropdown.',
    };
  }

  handleTextInput = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
    console.log(this.state)
  }


  submitToPost = () => {
    let list = this.props.boxCount;
    let listed = [...Array.from(Array(list)).keys()];
    let FormData = require('form-data');
    let data = new FormData();
    if (list >= 1) {
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
          this.setState({ meme_url: response.data.data.page_url })
          // console.log(this.state)
          this.createPopup()
        }, (error) => {
          console.log(error);
          ;
        });
    } else { this.setState({ select_meme: "You must select a meme before clicking submit." }) };
  }

  componentDidMount() {
    console.log(this.props.boxCount)
  }
  createPopup() {
    if (this.state.meme_url != undefined) {
      console.log("got meme", this.state.meme_url)
      return (<PopUp generatedMeme={this.state.meme_url} />)
    } else {
      console.log("empty")
    }
  }

  render() {
    let list = this.props.boxCount;
    let listed = [...Array.from(Array(list)).keys()]
    let width = {width: '100%'};

    const howMany = () => {
      if (this.props.boxCount <= 0) {
        return (<p>{this.state.select_meme}</p>)
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
    
    return (<div className="input">
      <ul>
      {howMany()}</ul>
      <StyledButton variant="outlined" type="button" onClick={this.submitToPost}>Submit</StyledButton>
    </div>)
  }
}
export default InputField;
