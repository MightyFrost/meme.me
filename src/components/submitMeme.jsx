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

class SubmitMeme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //iterate: [],
            iterBox: [,
                {text: '',
            id: ''}
        ],
            //text: '',

            // name: ''
        };
        this.handleTextInput = this.handleTextInput.bind(this);
    }
    state = {
        // boxContent: {},
    }

handleTextInput = (event) => {
    let box = this.props.boxCount;
    let iterBox = [...Array.from(Array(box)).keys()];
    iterBox.forEach(inst => {
        if (inst.value === event.target.value)
        inst.text = event.target.value
    })
    this.setState({iterBox: iterBox})
    console.log(iterBox, this.state.number, box);
}


    // handleTextInput = e => {
    //     let box = this.props.boxCount;
    //     let iterBox = [...Array.from(Array(box)).keys()];
    //     let iterN = iterBox.map(number => ({...number, id: number.value}));
    //     this.setState({ text: e.target.value});
    //     console.log(iterN, iterBox, this.state.number);
    // }

    // handleTextInput = e => {
    //     let box = this.props.boxCount;
    //     let iterBox = [...Array.from(Array(box)).keys()];
    //     let iterN = iterBox.map(number => (number));
    //     this.setState({ text: e.target.value, number: [...iterN] });
    //     console.log(iterN, iterBox, this.state.number);
    // }

    renderBox = () => {
        let indents = [];
        for (let i = 0; i < this.props.boxCount; i++) {
            indents.push(<StyledTextField
                key={i}
                id={"outlined-read-only-input", "input" + this.state.id}
                label={"Input field " + (i + 1)}
                defaultValue=""
                variant="outlined"
                value={this.state.text}
                onChange={this.handleTextInput}
                {...inst}
            />);
        }
        return indents;
    }

    submitSelection = () => {
        let submit = (<button>Submit</button>);
        for (let i = 0; i < this.props.boxCount; i++) {
            return submit;
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="input">
                    <form>
                        {this.renderBox()}
                    </form>
                    {this.submitSelection()}
                </div>
            </React.Fragment>
        );
    }
}

// handleIteration = () => {
//     // const count = Array.from(Array(this.props.boxCount).keys());
//     const count = [Array(this.props.boxCount)];
//     const doIterate = count.map(d => ({
//         "iteratedMeme": d.iteratedMeme
//     }));
//     this.setState({ iterate: doIterate });
//     console.log(doIterate);
// }

// componentDidMount() {
//     this.handleIteration();
// }
export default SubmitMeme;


