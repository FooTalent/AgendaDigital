import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import "./navbarTools.css";

const NavbarTools = ({ captureSearch }) => {
  const { setpagxhoja, pagxhoja, pagActual, firstindex, setfirstindex, setpagActual, users } =    useContext(GlobalContext);

  const btnNext = () => {
    
    const nextpage = pagActual +1;
    
    setfirstindex(nextpage* pagxhoja)
    if (users.length < firstindex) return;
    setpagActual(nextpage)
    
    console.log(firstindex);

  }

  const btnPrev = () => {
    const prevpage = pagActual -1;
    setfirstindex(prevpage* pagxhoja)
    setpagActual(prevpage)
    console.log(pagActual);
  }






useEffect(()=> {

// console.log(pagxhoja);

}, [pagxhoja])

  return (
    <div className="navbarTools">
      <div className="navbarTools-filter1">
        <span> Buscar: </span>
        <input
          className="navbarTools-search"
          type="text"
          onChange={captureSearch}
          placeholder="Por Email, nombre o dni"
        />
      </div>
      <div className="navbarTools-filter2">
        <div className="navbarTools-filter2-1">
          <p>Mostrar: </p>
          <select name="" id="" onChange={ (e)=> setpagxhoja(e.target.value)} >
            <option value="5">5</option>
            <option value="10">10</option>
            
          </select>
        </div>
        <div>
          <button onClick={btnPrev} disabled={pagActual === 0}>
            {" "}
            {"<<"}{" "}
          </button>
          <button onClick={btnNext} disabled={users.length < firstindex} >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTools;
