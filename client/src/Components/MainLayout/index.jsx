import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/index'
import './styles.scss'
const MainLayout = () => {
  return (
    <div className="Container">
      <div className="Header">
        <header>
          <Navbar />
        </header>
      </div>
      <div className="wrapper-body">
        <Outlet />
      </div>
    </div>



  );
};

export default MainLayout;