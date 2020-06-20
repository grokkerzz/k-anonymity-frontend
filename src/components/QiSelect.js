import React, {Component} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

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
        //TODO: Hàm đẩy dữ liệu được chọn qua backend
    }
     
    onRemove(selectedList, removedItem) {
        //TODO: Xoá dữ liệu đã chọn
    }
    render() {
        const {fieldArray, selectedValues} = this.state;
        return (
            <div class='d-sm-flex'>
                <label class="text-left" style={{marginRight: '11px'}}>Chọn các cột cần ẩn danh:</label>
                <Multiselect
                id='QiSelect'
                options={fieldArray}
                selectedValues={selectedValues}
                onSelect={this.onSelect}
                onRemove={this.onRemove}
                displayValue="field"
                closeIcon="cancel"
                avoidHighlightFirstOption="true"
                />
            </div>
        )
    }
}

export default QiSelect;