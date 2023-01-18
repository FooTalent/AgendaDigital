import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="containerAll">
      <div className="containerNavBar">
        <div className="notification">
          <img src="./img/notification.svg" alt="notification" />
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
      <div className="routesNavBar">
        <p>
            <span className="menuRoutes">Menú</span> {`>`} Dashboard
        </p>
      </div>
    </div>
  );
};

export default NavBar;
