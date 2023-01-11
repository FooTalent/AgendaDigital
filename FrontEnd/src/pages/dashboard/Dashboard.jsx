import React from 'react';
import "./dashboard.css"
import { NavLink } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';

const Dashboard = () => {
  return (
    <div className="container">
      <SideBar />
      <NavLink className="navDeco" to={"#"}>
      <div className="card">
        <div className="element">
          <p className="cardTitle">Asignatura</p>
          <p className="cardText">codigo*</p>
        </div>
        <div className='btn'>
          <button className="btnInfo">+informacion</button>
          <img className="imgInfo" src="../../../public/img/infoIcon.png" alt="info Icon" />
        </div>
      </div>
      </NavLink>
      <NavLink className="navDeco" to={"#"}>
      <div className="card">
        <div className="element">
          <p className="cardTitle">Asignatura</p>
          <p className="cardText">codigo**</p>
        </div>
        <div className='btn'>
          <button className="btnInfo">+informacion</button>
          <img className="imgInfo" src="../../../public/img/infoIcon.png" alt="info Icon"/>
        </div>
      </div>
      </NavLink>
      <NavLink className="navDeco" to={"#"}>
      <div className="card">
        <div className="element">
          <p className="cardTitle">Asignatura</p>
          <p className="cardText">codigo**</p>
        </div>
        <div className='btn'>
          <button className="btnInfo">+informacion</button>
          <img className="imgInfo" src="../../../public/img/infoIcon.png" alt="info Icon" />
        </div>  
      </div>
      </NavLink>
    </div>
  );
};

export default Dashboard;