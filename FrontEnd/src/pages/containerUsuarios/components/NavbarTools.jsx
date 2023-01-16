import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import "./navbarTools.css";

const NavbarTools = ({captureSearch}) => {

  const { orderByName, users } = useContext(GlobalContext)
  

  


  return (
    <div className="navbarTools">
      <div className="navbarTools-filter1">
       <span> Buscar: </span>
        <input className="navbarTools-search" type="text" onChange={captureSearch} placeholder='Por Email, nombre o dni'/>
      </div>
      <div className="navbarTools-filter2">
        <div className="navbarTools-filter2-1">
        <p>Mostrar: </p>
        <select name="" id="">
          <option value="">10</option>
          <option value="">20</option>
        </select>
        </div>
        <div>
        <button> {"<<"} </button>
        <button>{">>"}</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTools;
