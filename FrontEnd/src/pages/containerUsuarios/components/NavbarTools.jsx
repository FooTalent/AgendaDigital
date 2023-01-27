import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import "./navbarTools.css";

const NavbarTools = ({ captureSearch }) => {
  const {
    setpagxhoja,
    pagxhoja,
    pagActual,
    firstindex,
    setfirstindex,
    setpagActual,
    users
    , setfirstindex2, pagActual2, setpagActual2
  } = useContext(GlobalContext);

  const btnNext = () => {
    console.log(firstindex);
    if (users.length -1< firstindex) return;
    const nextpage = pagActual + 1;
    const nextpage2 = pagActual2 + 1;
    setfirstindex(nextpage * pagxhoja);
    setfirstindex2( nextpage2 * 5)
   
    setpagActual(nextpage);
    setpagActual2(nextpage2)
    // console.log(firstindex);
  };

  const btnPrev = () => {
    if (pagActual < 1) return;
    const prevpage = pagActual - 1;
    setfirstindex(prevpage * pagxhoja);
    setfirstindex2( prevpage * 5)
    setpagActual(prevpage);
    // console.log(pagActual);
  };

  // useEffect(() => {
  //   console.log(pagActual);
  // }, [pagxhoja]);

  return (
    <div className="navbarTools">
      <div className="navbarTools-filter1">
        <span className="order">A-Z ↓</span>
        <div className="navbarTools-search-container">
          <input
            className="navbarTools-search"
            type="text"
            onChange={captureSearch}
            placeholder="Buscar"
          />
          <img className="lupa" src="../img/lupa.png" alt="" />
        </div>
      </div>
      <div className="navbarTools-filter2">
        <div className="navbarTools-filter2-1">
          <p className="order">Mostrar: </p>
          <select className="select" name="" id="" onChange={(e) => setpagxhoja(e.target.value)}>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div className="btns">
          <div className="btn-prev center" onClick={btnPrev} disabled={pagActual <2}>
            <img src="../public/img/btnprev.png" alt="" />
          </div>
          <div className="btn-next center" onClick={btnNext} disabled={users.length < firstindex}>
          <img src="../public/img/btnnext.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTools;
