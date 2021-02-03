import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">StarsReward</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Rewards</Link>
          </li>
          <li className="navbar-item">
          <Link to="/register" className="nav-link">Register Reward</Link>
          </li>
          <li className="navbar-item">
          <Link to="/pupil" className="nav-link">Create Pupil</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}