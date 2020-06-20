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
    return(
            <div class="container" style={{height: '310px', float: 'left'}}>
            <h5 class="text-left">Dữ liệu đầu vào:</h5>
            <p class="text-left">Số dòng: {numRows}</p>
            <p class="text-left">Số cột: {numCols}</p>
            <p class="text-left">Các cột: {listCols}</p>
            </div>
    );
}

export default InputInfo;