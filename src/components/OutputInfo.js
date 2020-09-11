import React, {useState, useEffect} from 'react';

function OutputInfo() {
    const [numCat, setNumCat] = useState('Giải thuật đang chạy, vui lòng chờ...');
    const [numNum, setNumNum] = useState('Giải thuật đang chạy, vui lòng chờ...');
    useEffect(() => {
        fetch('/getoutput').then(res => res.json()).then(data => {
            setNumCat(data.categorical.join(' | '));
            setNumNum(data.numeric.join(' | '));
            console.log(data);
        });
    }, []);
    function openTable() {
        window.open('http://127.0.0.1:5000/outputtable');
    }
    function openDownloadLink() {
        window.open('http://127.0.0.1:5000/download');
    }

    return(
            <div class="container" style={{height: '310px', float: 'left'}}>
            <h5 class="text-left">Dữ liệu đầu ra:</h5>
            <p class="text-left">Các cột dạng phân loại: {numCat}</p>
            <p class="text-left">Các cột dạng số: {numNum}</p>
            <button
                onClick={openTable}
                style={{
                    backgroundColor: 'rgb(78 208 122)', 
                    color: 'rgb(255,255,255)',
                    marginTop: '0px',
                    float: 'left',
                }}
                className="btn visible"
                >
                  Xem bảng output
            </button>
            <button
                onClick={openDownloadLink}
                style={{
                    backgroundColor: 'rgb(255 130 213)', 
                    color: 'rgb(255,255,255)',
                    marginTop: '0px',
                    marginLeft: '20px',
                    float: 'left',
                }}
                className="btn visible"
                >
                  Tải về
            </button>
            </div>
    );
}

export default OutputInfo;