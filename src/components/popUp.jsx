import React from 'react';
import { StyledTextField, StyledButton } from './input/inputStyling';
import ShareTo from './shareTo'

class PopUp extends React.Component {
    render() {
        let width = { width: '50%', margin: '0 25%' };
        
        return (
            <div className='popup'>
                <div className='popupInner'>
                    <img className="popup-img" src={this.props.imgUrl} />
                    <ShareTo shareUrl={this.props.imgUrl} />
                    <br />
                    <StyledButton style={width} variant="outlined" type="button" onClick={this.props.closePopup}>Close</StyledButton>

                </div>
            </div>
        );
    }
}

export default PopUp;