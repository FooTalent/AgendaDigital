import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import "./sideBar.css";

const SideBar = () => {
  
  const {setEnabledSB, enabledSB, setEnabled, setMaximunWidth} = useContext(GlobalContext);

    let activeStyles = {
        color: "#fff",
        backgroundColor: "#6889FF",
        width: "100%",
        marginLeft: "0"
    };

    let stylesDefault = {
      color: "#26036E",
      width: "100%",
      marginLeft: "0"
  };

    const closeBtn = () => {
      setEnabledSB(true);
      setEnabled(false);
      setMaximunWidth(true)
    };

 
  return (
    <div className={`containerSideBar ${enabledSB ? "disabledSB" : null}`}>
      <div className="school">
        <p>ESCUELA</p>
        <div onClick={closeBtn} className="btnCloseSideBar">X</div>
      </div>
      <div className="user">
        <Link className="logoSchool" to={"/dashboard"}>
          <img src="../img/logoAulaEquis.svg" alt="imagen de usuario" />
          <h3>Aula Equis</h3>
        </Link>
      </div>
      <div className="containerRoutes">
        <div className="routes">
          <NavLink style={({isActive}) => isActive ? activeStyles : stylesDefault } className="editNavLink" to="/">
            <div className="route">
              <img src="../img/iconAlumnos.svg" alt="" />
              <p>Alumnos</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : stylesDefault } className="editNavLink" to="/">
            <div className="route">
              <img src="../img/iconAsistencia.svg" alt="" />
              <p>Asistencia</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : stylesDefault } className="editNavLink" to="/">
            <div className="route">
              <img src="../img/iconTareas.svg" alt="" />
              <p>Tareas</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : stylesDefault } className="editNavLink" to="/">
            <div className="route">
              <img src="../img/iconExamenes.svg" alt="" />
              <p>Exámenes</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : stylesDefault } className="editNavLink" to="/">
            <div className="route">
              <img src="../img/iconIncidencias.svg" alt="" />
              <p>Incidencias</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : stylesDefault } className="editNavLink" to='/usuarios/all' >
            <div className="route">
              <img src="../img/iconRegistroUsuario.svg" alt="" />
              <p>Registro Usuarios</p>
            </div>
          </NavLink>
        </div>
        <NavLink to="/" className="containerBtnClose">
          <div className="btnClose">
            <img src="../img/iconCerrarSesion.svg" alt="" />
            <p>Cerrar sesión</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
