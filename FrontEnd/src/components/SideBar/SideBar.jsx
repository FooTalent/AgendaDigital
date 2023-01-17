import React from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {

    let activeStyles = {
        color: "#fff",
        backgroundColor: "#6889FF",
        width: "100%",
        marginLeft: "0"
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
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/dashboard">
            <div className="route">
              <img src="../../../public/img/iconAlumnos.svg" alt="" />
              <p>Alumnos</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="../../../public/img/iconAsistencia.svg" alt="" />
              <p>Asistencia</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="../../../public/img/iconTareas.svg" alt="" />
              <p>Tareas</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="../../../public/img/iconExamenes.svg" alt="" />
              <p>Exámenes</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
            <div className="route">
              <img src="../../../public/img/iconIncidencias.svg" alt="" />
              <p>Incidencias</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/usuarios/all">
            <div className="route">
              <img src="../../../public/img/iconRegistroUsuario.svg" alt="" />
              <p>Registro Usuarios</p>
            </div>
          </NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles : undefined } className="editNavLink" to="/">
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
