import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div style={{backgroundColor:"white",padding:"20px"}}>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/R010/" className="navbar-brand r010-nav-link">ExcerTracker</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/R010/" className="r010-nav-link">Exercises</Link>
              </li>
              <li className="navbar-item">
              <Link to="/R010/create" className="r010-nav-link">Create Exercise Log</Link>
              </li>
              <li className="navbar-item">
              <Link to="/R010/user" className="r010-nav-link">Create User</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container'>
        <Outlet />
        </div>
      </div>
    );
  }
}