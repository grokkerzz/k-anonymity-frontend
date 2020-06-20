import React, { Component } from 'react';
import {Multiselect} from 'multiselect-react-dropdown';

class AlgoSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            algoArray: [
                { key: "k-anonymity"}
            ]
        }
    }
    render() {
        const {algoArray} = this.state;
        return (
            <div class='d-sm-flex'>
            <label class="text-left" style={{marginRight: '10px', marginTop: '4px', marginLeft: '30px'}}>Chọn giải thuật:</label>
            <Multiselect
            options={algoArray}
            singleSelect
            displayValue="key"
            />
            </div>
        )
    }
}

export default AlgoSelect;