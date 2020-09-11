import React, { Component } from 'react';
import {InputNumber} from 'antd';
import axios from 'axios';

class KValue extends Component {
    componentDidMount() {
        axios.post('/getk', 2)
    }
    handleChange(value) {
        axios.post('/getk', value)
    }
    render() {
        return (
            <div style={{width: '70px', marginTop:'10px', display:'inline-block'}}>
                <label>Chọn k</label>
                <InputNumber 
                id = "KInput"
                style={{position: 'relative'}}
                min={0}
                defaultValue={2}
                size={"large"}
                onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default KValue;