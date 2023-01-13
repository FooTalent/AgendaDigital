import React from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {

    const activeStyle = {
        color: "#fff",
        backgroundColor: "#6889FF",
        width: "90%"
    };

    const styleDefault = {
        color: "#000",
        backgroundColor: "#fff"
    };

  return (
    <div className="containerSideBar">
      <div className="school">
        <p>ESCUELA</p>
      </div>
      <div className="user">
        <img src="../../../public/img/admin.svg" alt="imagen de usuario" />
        <h3>ADMIN</h3>
      </div>
      <div className="containerRoutes">
        <div className="routes">
          <NavLink style={({isActive}) => isActive ? activeStyle : styleDefault } className="editNavLink" to="/dashboard">
            <div className="route">
              <img src="../../../public/img/iconAlumnos.svg" alt="" />
              <p>Alumnos</p>
            </div>
          </NavLink>
          <NavLink className="editNavLink">
            <div className="route">
              <img src="../../../public/img/iconAsistencia.svg" alt="" />
              <p>Asistencia</p>
            </div>
          </NavLink>
          <NavLink className="editNavLink">
            <div className="route">
              <img src="../../../public/img/iconTareas.svg" alt="" />
              <p>Tareas</p>
            </div>
          </NavLink>
          <NavLink className="editNavLink">
            <div className="route">
              <img src="../../../public/img/iconExamenes.svg" alt="" />
              <p>Exámenes</p>
            </div>
          </NavLink>
          <NavLink className="editNavLink">
            <div className="route">
              <img src="../../../public/img/iconIncidencias.svg" alt="" />
              <p>Incidencias</p>
            </div>
          </NavLink>
          <NavLink className="editNavLink">
            <div className="route">
              <img src="../../../public/img/iconRegistroUsuario.svg" alt="" />
              <p>Registro Usuarios</p>
            </div>
          </NavLink>
          <NavLink className="editNavLink">
            <div className="route">
              <img src="../../../public/img/iconConfig.svg" alt="" />
              <p>Configuración</p>
            </div>
          </NavLink>
        </div>
        <NavLink className="containerBtnClose">
          <div className="btnClose">
            <img src="../../../public/img/iconCerrarSesion.svg" alt="" />
            <p>Cerrar sesión</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
