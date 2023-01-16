import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {

  const [disabledSB, setDisabledSB] = useState(false);
  const [enabled, setEnabled] = useState(false);


    let activeStyles = {
        color: "#fff",
        backgroundColor: "#6889FF",
        width: "100%",
        marginLeft: "0"
    };

    const closeBtn = () => {
      console.log("Boton Cerrado");
      setDisabledSB(true);
/*       setEnabled(); */
    };

  return (
    <div className={`containerSideBar ${disabledSB ? "disabledSB" : null}`}>
      <div className="school">
        <p>ESCUELA</p>
        <div onClick={closeBtn} className="btnCloseSideBar">X</div>
      </div>
      <div className="user">
        <img src="./img/admin.svg" alt="imagen de usuario" />
        <h3>ADMIN</h3>
      </div>
      <div className="containerRoutes">
        <div className="routes">
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="./img/iconAlumnos.svg" alt="" />
              <p>Alumnos</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="./img/iconAsistencia.svg" alt="" />
              <p>Asistencia</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="./img/iconTareas.svg" alt="" />
              <p>Tareas</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="./img/iconExamenes.svg" alt="" />
              <p>Exámenes</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="./img/iconIncidencias.svg" alt="" />
              <p>Incidencias</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/dashboard">
            <div className="route">
              <img src="./img/iconRegistroUsuario.svg" alt="" />
              <p>Registro Usuarios</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="./img/iconConfig.svg" alt="" />
              <p>Configuración</p>
            </div>
          </NavLink>
        </div>
        <NavLink to="/" className="containerBtnClose">
          <div className="btnClose">
            <img src="./img/iconCerrarSesion.svg" alt="" />
            <p>Cerrar sesión</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
