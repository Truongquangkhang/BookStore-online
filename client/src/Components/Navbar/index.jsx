import { NavLink } from "react-router-dom";
import './styles.scss'


const Navbar = () => {
  const activeNavbar = {
    color: "white",
    background: "#003A57",
    borderRadius: "8px",
  };

  return (
    <nav className="navbar">
      <h1>Bookang</h1>
      <div className="links" style={{}}>
        <NavLink
          to="/"
          style={({ isActive }) => isActive ? activeNavbar : {}}
        >
            Home
        </NavLink>
        <NavLink
          to="/book"
          style={({ isActive }) => isActive ? activeNavbar : {}}
        >
          Books
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;