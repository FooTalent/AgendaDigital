import React from "react";
import "./navbarTools.css";

const NavbarTools = () => {
  return (
    <div className="navbarTools">
      <div className="navbarTools-filter1">
        <button>A-Z</button>
        <input className="navbarTools-search" type="text" />
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
