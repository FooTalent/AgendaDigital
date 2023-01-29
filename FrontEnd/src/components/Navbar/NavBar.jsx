import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import "./navbar.css";

const NavBar = () => {
  const { setEnabledSB, setEnabled, enabled, setMaximunWidth } = useContext(GlobalContext);

    const handlerSideBar = () => {
        setEnabledSB(false);
        setEnabled(true);
        setMaximunWidth(false)
    };

    

  return (
    <div className={`containerAll ${enabled ? "disabledContainerNavbar" : null}`}>
      <div className="containerNavBar">
        <div className="hamburguer">
            <img onClick={handlerSideBar} src="./img/hamburger_icon.png" alt="hamburger icon" />
            <h3>ESCUELA</h3>
        </div>
        <div className="notification disableNavBar">
          <img src="./img/notification.svg" alt="notification" />
        </div>
        <div className="selectUser containerSelect">
          <img src="./img/user.svg" alt="user" />
          <select className="selectUser selectWidth" name="selectUser" id="selectUser">
            <option className="optionValue" value="student">
              {/* nombre de acuerdo al usuario */}
              Admin
            </option>
            <option className="optionValue" value="admin">
              Mi perfil
            </option>
            <option className="optionValue" value="dad/mother">
              Cerrar sesión
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
