import React, { Component } from 'react';
import DropDown from './dropDown'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            padding: 1,
            width: '25ch',
        },
    },
}));

class SubmitMeme extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    state = {
        boxContent: {}
    }

    renderBox = () => {
        let indents = [];
        for (let i = 0; i < this.props.boxCount; i++) {
            indents.push(<div><TextField
                key={i}
                    id="outlined-read-only-input"
                    label={"Input field " + (i + 1)}
                    defaultValue=""
                    variant="outlined"
                    className="text-field"
                /></div>);
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

export default SubmitMeme;


