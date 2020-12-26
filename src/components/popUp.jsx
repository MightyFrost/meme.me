import React, { Component } from 'react';
//import PopUp from "./PopUp";

class PopUp extends Component {
    state = {  }
    render() { 
        return ( <div className="modal">
            <div className="modal_content">
                <img src={this.props.generated_meme}/>
            </div>
        </div> );
    }
}
 
export default PopUp;