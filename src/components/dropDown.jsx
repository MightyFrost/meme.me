import Axios from 'axios';
import React from 'react';
import Select from 'react-select';

class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
            selectOptions: [],
            id: "",
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
    }

    componentDidMount() {
        this.getOptions();
    }

    // handleChange = selectedOption => {
    //     this.setState(
    //         { selectedOption },
    //         () => console.log(`Option selected:`, this.state.selectedOption)
    //     );
    // };

    handleChange(e) {
        this.setState({ id: e.value, name: e.label, url: e.url, box_count: e.box_count })
    }

    render() {
        console.log(this.state.selectOptions)
        return (
            <React.Fragment className="display">
                <Select
                    onChange={this.handleChange.bind(this)}
                    options={this.state.selectOptions}
                    placeholder="Select a template"
                />
                <img key={this.state.id} src={this.state.url} style={{ maxHeight: 250, maxWidth: 250 }}></img>
                <p>The box count is {this.state.box_count}.</p>
            </React.Fragment>
        );
    }
}


export default DropDown;