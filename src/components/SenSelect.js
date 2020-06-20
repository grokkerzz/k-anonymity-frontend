import React, {Component} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

class SenSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "",
            fieldArray: [
            ],
            selectedValues: [
            ]
        }
    }
    getField() {
        var temp_array = [];
        fetch('/getinput')
            .then(res => res.json())
            .then(
                (data) => {
                for (let i=0; i<data.list_columns.length; i++) {
                    temp_array.push({field: data.list_columns[i]})
                }
                this.setState({
                    fieldArray: temp_array
                });
            });
    }
    componentDidMount() {
        this.getField();
    }
    render() {
        const {fieldArray, selectedValues} = this.state;
        return (
            <div class='d-sm-flex'>
                <label class="text-left" style={{marginRight: '11px', marginLeft: '30px'}}>Chọn các giá trị nhạy cảm:</label>
                <Multiselect
                options={fieldArray}
                selectedValues={selectedValues}
                displayValue="field"
                closeIcon="cancel"
                avoidHighlightFirstOption="true"
                />
            </div>
        )
    }
}

export default SenSelect;