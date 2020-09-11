import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar';
import QiSelect from './components/QiSelect';
import InputInfo from './components/InputInfo';
import KValue from './components/KValue';
import OutputInfo from './components/OutputInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {showOutput: false}
  }
  _showOutput = (bool) => {
    this.setState({
      showOutput: bool
    });
  }

  render() {
    return (
      <div className="App">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Công cụ ẩn danh dữ liệu</title>
        <meta name="description" content="Tạo bảng dữ liệu ẩn danh nhanh chóng, chuyên nghiệp." />
        <link rel="stylesheet" href="bootstrap.min.css"/>
        <div id="wrapper">
          <Navbar/>
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <nav className="navbar navbar-light bg-white shadow mb-4 static-top">
                <div>
                  <QiSelect/>
                  <KValue/>
                  <div> 
                    <div style={{float:'left'}}>
                      <button
                        style={{
                            backgroundColor: 'rgb(248, 69, 80)', 
                            color: 'rgb(255,255,255)',
                            marginTop:'15px',
                        }}
                        className="btn btn-primary"
                        onClick={this._showOutput.bind(null, true)}
                      >
                            Tạo bảng ẩn danh
                      </button> 

                    </div> 
                  </div>
                </div>
              </nav>
              <InputInfo/>
              {this.state.showOutput && (<OutputInfo/>)}
            </div>
            <footer className="bg-white sticky-footer">
              <div className="container my-auto">
                <div className="text-center my-auto copyright"><span>Copyright © CSE - HCMUT - 2020</span></div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
