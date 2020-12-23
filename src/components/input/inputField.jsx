import React, { Component } from 'react';
import DropDown from '../dropDown'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      padding: 1,
      width: '35ch',
    },
  },
}
));

const StyledTextField = styled(TextField)`
label.Mui-focused {
color: white;
}
.MuiOutlinedInput-input {
padding: 12px 9px;
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
`;

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleTextInput = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
    console.log(this.state)
  }

  render() {
    let list = this.props.boxCount;
    let listed = [...Array.from(Array(list)).keys()]
    console.log(this.props.boxCount)
    let arg = 0;

    const howMany = () => {
      if (this.props.boxCount <= 0) {
        return (<p>Please select a meme from the dropdown.</p>)
      } else {
        return (
          listed.map((item, index) => (
            <StyledTextField className="text-field"
              key={item}
              value={this.state.value}
              onChange={this.handleTextInput}
              className={"outlined-read-only-input"}
              label={"Input field " + (item)}
              variant="outlined"
              name={"value" + (item)}
            />
          ))
        );
      }
    }
    return (<ul className="input">
      {howMany()}
    </ul>)
  }
}
export default InputField;