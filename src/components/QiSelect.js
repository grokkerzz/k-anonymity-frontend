import React, {Component} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';

class QiSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    onSelect(selectedList, selectedItem) {
        axios.post("/getQI", selectedList)
    }
     
    onRemove(selectedList, removedItem) {
        axios.post("/getQI", selectedList)
    }
    render() {
        const {fieldArray, selectedValues} = this.state;
        return (
            <div style={{display:'inline-block', marginRight:'15px'}}>
                <label style={{marginRight: '11px', marginLeft: '10px'}}>Chọn các cột cần ẩn danh (QI)</label>
                <Multiselect style={{position: 'relative'}}
                id='QiSelect'
                options={fieldArray}
                selectedValues={selectedValues}
                onSelect={this.onSelect}
                onRemove={this.onRemove}
                displayValue="field"
                closeIcon="cancel"
                avoidHighlightFirstOption="true"
                closeOnSelect="false"
                />
            </div>
        )
    }
}

export default QiSelect;