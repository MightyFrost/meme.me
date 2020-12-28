import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

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
export const StyledTextField = styled(TextField)`
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
export const StyledButton = withStyles({
  root: {
    color: 'inherit',
    width: '100%',
    margin: '10px 0 0 0',
    'border-color': '#a7aaae',
  }
})(Button);
