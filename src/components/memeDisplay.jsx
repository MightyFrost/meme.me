import React, { Component } from 'react';

class MemeDisplay extends Component {
    state = {
        isLoading: true,
        memes: [],
        error: null
    };

    fetchMemes = () => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    memes: data.data.memes,
                    isLoading: false,
                }); console.log(data.data.memes)
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchMemes();
    }

    mapMemes = () => {

    }

    render() {
        const { isLoading, memes, error } = this.state;
        return (
            <React.Fragment>
                <div className="dropdown display">
                    <button className="dropbtn" value={this.state.selectedOption} options={memes.options} placeholder="Pick a template"></button>
                    <div className="dropdown-content">
                        {error ? <p>{error.message}</p> : null}
                        {!isLoading ? mapMemes(memes) : (
                                <h3>Loading..</h3>
                            )}
                    </div>
                </div>
                {/* <div>
                    {!isLoading ? (
                        memes.map(meme => {
                            const { id, name, url, width, height, box_count } = meme;
                            return (
                                <img key={id} src={url}></img>
                            );
                        })
                    ) : (
                            <h3>Loading..</h3>
                        )}
                </div> */}
            </React.Fragment>);
    }
}

export default MemeDisplay;

function mapMemes(memes) {
    return (
        memes.map(meme => {
            const { id, name, url, width, height, box_count } = meme;
            return (
                <a key={id} href={id}>{name}</a>
            );
        })
    );
}
