import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import AllUsuarios from "./components/AllUsuarios";
import NavbarTools from "./components/NavbarTools";
import NavbarUsuarios from "./components/NavbarUsuarios";
import './containerusuarios.css'

const ContainerUsuarios = () => {



  return (
    <div className="users-container">
      <SideBar />
      <div className="sol-users">
        <NavbarUsuarios />
        <NavbarTools />
        <AllUsuarios/>
        {/* aqui agregar addusuario(Gonzalo) */}
      </div>
    </div>
  );
};

export default ContainerUsuarios;
