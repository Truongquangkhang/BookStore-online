import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from '../../Redux/Actions';
import DropDownMenu from "../DropDownMenu";
import './styles.scss';
const Navbar = () => {


  const dispatch = useDispatch()
  const [localState, setLocalState] = useState(false);
  const activeNavbar = {
    color: "white",
    background: "#003A57",
    borderRadius: "8px",
  };

  const handlerLogout = React.useCallback(() => {
    dispatch(actions.authAction.logout())
    setLocalState(false)
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.getItem('access_token') ? setLocalState(true) : setLocalState(false)

  }, [setLocalState]);

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
      <div className="login_register">
        {
          localState ?
            <>
              {/* <Button onClick={handlerLogout}>Logout</Button> */}
              <DropDownMenu handlerLogout={handlerLogout}/>
            </>
            :
            <>
              <NavLink
                to="/login"
                style={({ isActive }) => isActive ? activeNavbar : {}}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                style={({ isActive }) => isActive ? activeNavbar : {}}
              >
                Register
              </NavLink>
            </>

        }
      </div>
    </nav>
  );
};

export default Navbar;