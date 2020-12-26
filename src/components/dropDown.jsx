import Axios from 'axios';
import React from 'react';
import Select from 'react-select';
import RenderBox from './input/inputField';
import SubmitMeme from './submitMeme';
import InputField from './input/inputField'


class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
            selectOptions: [],
            id: '',
            name: '',
            url: '',
            box_count: ''
        }
    }

    async getOptions() {
        const res = await Axios.get('https://api.imgflip.com/get_memes');
        const data = res.data;

        const options = data.data.memes.map(d => ({
            "value": d.id,
            "label": d.name,
            "url": d.url,
            "box_count": d.box_count
        }))
        this.setState({ selectOptions: options });
        console.log(options);
    }

    componentDidMount() {
        this.getOptions();
    }

    handleChange(e) {
        this.setState({ id: e.value, name: e.label, url: e.url, box_count: e.box_count })
    }

    render() {
        const { selectOptions, id, name, url, box_count } = this.state;
        console.log(selectOptions);
        const displayCount = () => {
            if (box_count <= 0) {
                return <p>No meme selected.</p>
            }
            else { return <p>The box count is {box_count}.</p> }
        }
        return (
            <React.Fragment>
                <div className="display, display-content">
                    <Select
                        onChange={this.handleChange.bind(this)}
                        options={selectOptions}
                        placeholder="Select a template"
                    />
                    <img className="img-size" src={url} ></img>
                    {displayCount()}
                </div>
                <InputField boxCount={box_count} templateId={id} />
            </React.Fragment>
        );
    }
}


export default DropDown;