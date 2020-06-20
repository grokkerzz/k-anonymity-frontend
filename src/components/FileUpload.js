import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
    state = {
      selectedFile: null
    };
    onFileChange = event => {
      this.setState({ selectedFile: event.target.files[0]});
    };
    onFileUpload = () => {
      if (this.state.selectedFile) {
      const formData = new FormData();
      formData.append(
        "input",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      console.log(this.state.selectedFile);
      axios.post("api/uploadfile", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res.statusText)
      });
      window.location.reload(false);
    }
    };
    fileData = () => {
        if (this.state.selectedFile) { 
            return ( 
              <div> 
                <p>Đã chọn: {this.state.selectedFile.name}</p>
              </div> 
            ); 
          } else { 
            return ( 
              <div> 
                <br /> 
                <label>Chọn file trước khi Upload</label>
              </div> 
            ); 
          }
    };
    render() {
        return (
        <div> 
            <div> 
                <input 
                type="file" 
                onChange={this.onFileChange}
                style={{
                    fontSize: '10px',
                    width: '138px',
                }}
                accept=".csv"
                /> 
                <button
                onClick={this.onFileUpload}
                style={{
                    backgroundColor: 'rgb(133, 193, 68)', 
                    color: 'rgb(255,255,255)'
                }}
                className="btn btn-primary visible"
                >
                  Upload
                </button> 

            </div> 
          {this.fileData()} 
        </div>
        );
    }
}

export default FileUpload;