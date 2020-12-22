import React, { Component } from 'react';
import DropDown from './dropDown'
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';
import InputField from './inputField'
class SubmitMeme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iterBox: [
                {
                    id: '',
                    value: '',
                }
            ]
        }
    }


    handleAllChecked = (event) => {
        let iterBox = this.props.iterBox;
        iterBox.forEach(field => field.isChecked = event.target.checked)
        this.setState({ iterBox: iterBox })
    }

    shitFuck = () => {
        let box = this.props.boxCount;
        let iterBox = [...Array.from(Array(box)).keys()];
        return iterBox;
    }

    componentDidMount() {
        this.shitFuck();
    }

    handleTextInput = (event) => {
        let iterBox = this.shitFuck();
        iterBox.forEach(field => {
            if (field.value === event.target.value)
                field.value = event.target.value
        })
        this.setState({ iterBox: iterBox });
        console.log(iterBox)
    }

    render() {
        return (
            <div className="input">
                <ul>
                    {
                        this.shitFuck().map((field, index) => {
                            return (<InputField key={index} handleTextInput={this.handleTextInput} {...field} />);
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default SubmitMeme;