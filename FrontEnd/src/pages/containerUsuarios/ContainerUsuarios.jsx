import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import AddUsuario from "./components/AddUsuario";
import AllUsuarios from "./components/AllUsuarios";
import NavbarTools from "./components/NavbarTools";
import NavbarUsuarios from "./components/NavbarUsuarios";
import './containerusuarios.css'

const ContainerUsuarios = ({pg}) => {



  return (
    <div className="users-container">
      <SideBar />
      <div className="sol-users">
        <NavbarUsuarios />
        <NavbarTools />
        {
          pg === 'all' ?
          <AllUsuarios/>
          :
          <AddUsuario/>
        }        
        
      </div>
    </div>
  );
};

export default ContainerUsuarios;
