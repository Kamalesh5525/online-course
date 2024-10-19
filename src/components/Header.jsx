
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#007bff' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Online Courses</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/courses">Course Catalog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
