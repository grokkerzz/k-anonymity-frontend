import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import QiSelect from './components/QiSelect';
import AlgoSelect from './components/AlgoSelect';
import InputInfo from './components/InputInfo';
import SenSelect from './components/SenSelect';

class App extends Component {
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
              <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                <div className="container-fluid">
                  <QiSelect/>
                  <SenSelect/>
                  <AlgoSelect/>
                  <ul className="nav navbar-nav flex-nowrap ml-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow">
                      <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-search" /></a>
                      <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto navbar-search w-100">
                          <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
              <InputInfo/>


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
