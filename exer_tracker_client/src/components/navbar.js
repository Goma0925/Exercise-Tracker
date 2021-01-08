import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/app" className="navbar-brand">ExcerTracker</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/app" className="nav-link">Exercises</Link>
            </li>
            <li className="nav-item">
              <Link to="/app/create" className="nav-link">Record Exercise</Link>
            </li>
            <li className="nav-item">
              <Link to="/app/user" className="nav-link">Add User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
