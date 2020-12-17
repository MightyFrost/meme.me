import React, { Component } from 'react';

class ShareTo extends Component {
    state = {  }


    render() { 
        return (
            <React.Fragment>
                <div className="submit">
            <div className="share-btn" class="fb-share-button" data-href="http://localhost:3000/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
            <a className="share-btn" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
            </div>
</React.Fragment>
        );
    }
}
 
export default ShareTo;