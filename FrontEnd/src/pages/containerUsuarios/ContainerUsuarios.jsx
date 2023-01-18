import React, { useContext, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import NavBar from "../../components/Navbar/NavBar";
>>>>>>> 8e6fbc52e1578239ebc96bf1dc8bb5a0718a423b
=======
import NavBar from "../../components/Navbar/NavBar";
>>>>>>> 8e6fbc52e1578239ebc96bf1dc8bb5a0718a423b
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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="sol-users">
=======
      
      <div className="sol-users">
      <NavBar/>
>>>>>>> 8e6fbc52e1578239ebc96bf1dc8bb5a0718a423b
=======
      
      <div className="sol-users">
      <NavBar/>
>>>>>>> 8e6fbc52e1578239ebc96bf1dc8bb5a0718a423b
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
