import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/index'
import './styles.scss'
const MainLayout = () => {
  return (
    <div className="Container">
      <div className="Header">
        <Navbar />
      </div>
      <div className="Sidebar">
      </div>
      <div className="wrapper-body">
        <Outlet />
      </div>
    </div>



  );
};

export default MainLayout;