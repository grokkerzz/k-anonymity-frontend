import React, {Component, useState, useEffect} from 'react';

function InputInfo() {
    const [numRows, setNumRows] = useState(0);
    const [numCols, setNumCols] = useState(1);
    const [listCols, setListCols] = useState(3);
    useEffect(() => {
        fetch('/getinput').then(res => res.json()).then(data => {
            setNumRows(data.num_rows);
            setNumCols(data.num_cols);
            setListCols(data.list_columns.join(' | '));
        });
    }, []);
    function openTable() {
        window.open('http://127.0.0.1:5000/inputtable');
    }
        
    return(
            <div class="container" style={{height: '310px', float: 'left'}}>
            <h5 class="text-left">Dữ liệu đầu vào:</h5>
            <p class="text-left">Số dòng: {numRows}</p>
            <p class="text-left">Số cột: {numCols}</p>
            <p class="text-left">Các cột: {listCols}</p>
            <button
                onClick={openTable}
                style={{
                    backgroundColor: 'rgb(147, 191, 226)', 
                    color: 'rgb(255,255,255)',
                    marginTop: '0px',
                    float: 'left',
                }}
                className="btn visible"
                >
                  Xem bảng
            </button>
            </div>
    );
}

export default InputInfo;