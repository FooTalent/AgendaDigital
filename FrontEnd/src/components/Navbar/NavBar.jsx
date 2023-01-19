import React from "react";
import "./navbar.css";

const NavBar = () => {

    const enabledSideBar = () => {

    };
    
  return (
    <div className="containerAll">
      <div className="containerNavBar">
        <div className="notification disableNavBar">
          <img src="./img/notification.svg" alt="notification" />
        </div>
        <div className="hamburguer">
            <img onClick={enabledSideBar} src="./img/hamburger_icon.png" alt="hamburger icon" />
            <h3>ESCUELA</h3>
        </div>
        <div className="selectUser containerSelect">
          <img src="./img/user.svg" alt="user" />
          <select className="selectUser" name="selectUser" id="selectUser">
            <option className="optionValue" value="admin">
              Admin
            </option>
            <option className="optionValue" value="dad/mother">
              Dad/ Mother
            </option>
            <option className="optionValue" value="student">
              Student
            </option>
          </select>
        </div>
      </div>
      <div className="routesNavBar disableNavBar">
        <p>
            <span className="menuRoutes">Menú</span> {`>`} Dashboard
        </p>
      </div>
    </div>
  );
};

export default NavBar;
