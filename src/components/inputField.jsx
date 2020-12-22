import React, { Component } from 'react';
import DropDown from './dropDown'
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

export const InputField = props => {
  return (
    <li>
      <StyledTextField 
      key={props.id}
        onChange={props.handleTextInput}
        value={props.value}
        className={"outlined-read-only-input"}
        label={"Input field "}
        variant="outlined"
        fieldAmount={props.BoxCount}
      /> {props.value}
    </li>
  )
}

// export const InputField = props => {
//         let indents = [];
//         for (let i = 0; i < props.boxCount; i++) {
//             indents.push(<li><StyledTextField
//                 key={props.id}
//                 onChange={props.handleTextInput}
//                 checked={props.isChecked}
//                 value={props.value}
//                 className={"outlined-read-only-input"}
//                 label={"Input field " + (i + 1)}
//                 variant="outlined"
//             /> {props.value}</li>);
//         }
//         return (<div className="input">{indents}</div>);
//     }
export default InputField;