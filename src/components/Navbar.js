import React, { Component } from 'react';
import FileUpload from './FileUpload';
import ProcessButton from './ProcessButton';

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state={fileUploadState:""};
      this.inputReference = React.createRef();
    }
    fileUploadAction = () => this.inputReference.current.click();
    fileUploadInputChange = (e) => this.setState({fileUploadState:e.target.value});
    render() {
        return (
          <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0">
              <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#" style={{paddingRight: '64px', paddingLeft: '10px', width: '222px'}}>
                <span className="text-center" style={{color: 'rgb(255,255,255)', fontSize: '19px', marginRight: '-51px', marginTop: '6px'}}>
                  <strong>Ẩn danh hoá</strong><br /><strong>dữ liệu</strong><br />
                </span>
              </a>
              <div className="bg-dark border-primary shadow" style={{marginTop: '15px', marginRight: '4px', paddingTop: '0px', paddingRight: '39px', paddingBottom: '4px', marginBottom: '16px'}}>
                <h4 style={{color: 'rgb(151,255,19)', fontSize: '20px', paddingTop: '12px', paddingLeft: '38px'}}><strong>HOW TO USE</strong></h4>
              </div>
              <p className="text-left" style={{color: 'rgb(255,255,255)', paddingTop: '5px', paddingLeft: '30px', paddingRight: '65px'}}>1. Upload dữ liệu</p>
              <p className="text-left" style={{color: 'rgb(255,255,255)', paddingTop: '5px', paddingRight: '0px', paddingLeft: '34px', marginRight: '30px', marginLeft: '0px'}}>2. Chọn các cột cần ẩn danh (Quasi-identifiers)&nbsp;</p>
              <p className="text-left" style={{color: 'rgb(255,255,255)', paddingTop: '5px', paddingLeft: '33px', marginRight: '30px'}}>3. Chọn giải thuật ẩn danh</p>
              <FileUpload/>
              <ProcessButton/>
            </div>
          </nav>
        );
    }
}

export default Navbar;