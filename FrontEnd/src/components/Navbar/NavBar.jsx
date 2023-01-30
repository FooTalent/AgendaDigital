import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import SelectReact from "../Select/SelectReact";
import "./navbar.css";

const NavBar = () => {
  const { setEnabledSB, setEnabled, enabled, setMaximunWidth, directedRoute } = useContext(GlobalContext);

    const handlerSideBar = () => {
        setEnabledSB(false);
        setEnabled(true);
        setMaximunWidth(false)
    };

    

  return (
    <div className={`containerAll ${enabled ? "disabledContainerNavbar" : null}`}>
      <div className="containerNavBar">
        <div className="hamburguer">
            <img onClick={handlerSideBar} src="../img/hamburger_icon.png" alt="hamburger icon" />
            <Link className="in" to='/dashboard'><h3>ESCUELA</h3></Link> 
        </div>
        <div className="notification disableNavBar">
          <img src="./img/notification.svg" alt="notification" />
        </div>
        <SelectReact /> 
      </div>
      <div className="routesNavBar disableNavBar">
        <div className="containerDirectedRoutes">
            <span className="menuRoutes">Menú</span>
            <p>{`>`} Dashboard </p>
            { directedRoute ? <p>{`>`} {directedRoute}</p> : undefined }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
