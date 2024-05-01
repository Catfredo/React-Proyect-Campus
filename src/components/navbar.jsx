import React from "react";
import { NavLink } from 'react-router-dom';
import "/src/stylesSheets/navbar.css";



const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="img-container"></div>
        <h1>
          This.NameOfApp
        </h1>

        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'elementsList' : 'link')}
          >
            Home</NavLink>
          <NavLink
            to="/component2"
            className={({ isActive }) => (isActive ? 'elementsList' : 'link')}
          >
            Link to</NavLink>
          <NavLink
            to="/component3"
            className={({ isActive }) => (isActive ? 'elementsList' : 'link')}
          >
            Link to</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;