import React, { Component } from 'react';

class ProcessButton extends Component {
    render() {
        return (
        <div> 
            <div>
                <button
                style={{
                    backgroundColor: 'rgb(248, 69, 80)', 
                    color: 'rgb(255,255,255)',
                    marginTop: '100px',
                }}
                className="btn btn-primary visible"
                >
                  Tạo bảng ẩn danh
                </button> 
            </div> 
        </div>
        );
    }
}

export default ProcessButton;