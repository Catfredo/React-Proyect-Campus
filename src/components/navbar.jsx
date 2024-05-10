import { NavLink } from 'react-router-dom';
import "/src/stylesSheets/navbar.css";



const Navbar = () => {
  return (
    <header className="hd-navbar">

        <h1 className="title-navbar">
          Space Core
        </h1>

        <nav className="nv-navbar">
          <NavLink
            to="/"
            className="link"
          >
            Home</NavLink>
          <NavLink
            to="/"
            className="link"
          >
            Roover</NavLink>
          <NavLink
            to="/exoplanets"
            className="link"
          >
          Exoplanets</NavLink>
        </nav>
    </header>
  );
}

export default Navbar;