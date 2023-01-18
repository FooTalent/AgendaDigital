import React, { useContext, useState } from "react";

import SideBar from "../../components/SideBar/SideBar";
import { GlobalContext } from "../../Context/GlobalContext";
import AddUsuario from "./components/AddUsuario";
import AllUsuarios from "./components/AllUsuarios";
import NavbarTools from "./components/NavbarTools";
import NavbarUsuarios from "./components/NavbarUsuarios";
import './containerusuarios.css'

const ContainerUsuarios = ({pg}) => {

 const [search, setsearch] = useState('')

 const captureSearch = (e) => {
  setsearch(e.target.value);

 }


  return (
    <div className="users-container">
      <SideBar />

      
      <div className="sol-users">
   

        <NavbarUsuarios />
       
        {
          pg === 'all' ?
          <>
          <NavbarTools captureSearch={captureSearch} />
          <AllUsuarios search={search} />
          </>
          :
          <AddUsuario/>
        }        
        
      </div>
    </div>
  );
};

export default ContainerUsuarios;
