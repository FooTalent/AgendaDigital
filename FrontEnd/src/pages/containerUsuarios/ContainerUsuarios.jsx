import React, { useContext, useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/Navbar/NavBar";

import SideBar from "../../components/SideBar/SideBar";
import { GlobalContext } from "../../Context/GlobalContext";
// import { GlobalContext } from "../../Context/GlobalContext";
import AddUsuario from "./components/AddUsuario";
import AllUsuarios from "./components/AllUsuarios";
import NavbarTools from "./components/NavbarTools";
import NavbarUsuarios from "./components/NavbarUsuarios";
import './containerusuarios.css'

const ContainerUsuarios = ({pg}) => {
  const { enabled , setEnabled, setMaximunWidth, setEnabledSB} = useContext(GlobalContext);
 const [search, setsearch] = useState('')

 const captureSearch = (e) => {
  setsearch(e.target.value);
 }

useEffect(()=>{
load()
},[])
 
 const load = () => {
 setEnabled(false)
 setMaximunWidth(true)
 setEnabledSB(true);
 }


  return (
    <div className="users-container">
      <SideBar />
      {
        enabled ? 
       null
      :
      <div className='sol-users'> 
      <NavBar/>

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
      }
      
    </div>
  );
};

export default ContainerUsuarios;
