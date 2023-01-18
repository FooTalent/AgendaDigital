import React, { useContext } from "react";
import "./dashboard.css";
import { NavLink } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { GlobalContext } from "../../Context/GlobalContext";

const Dashboard = () => {
  const {enabled} = useContext(GlobalContext);


  return (
    <div className="containerDashboard">
      <SideBar />
      <div className={`container ${enabled ? "enabledContainer" : null}`}>
        <NavLink className="navDeco" to={"#"}>
          <div className="card">
            <div className="element">
              <p className="cardTitle">Asignatura</p>
              <p className="cardText">codigo*</p>
            </div>
            <div className="btn">
              <button className="btnInfo">+informacion</button>
              <img
                className="imgInfo"
                src="../../../public/img/infoIcon.png"
                alt="info Icon"
              />
            </div>
          </div>
        </NavLink>
        <NavLink className="navDeco" to={"#"}>
          <div className="card">
            <div className="element">
              <p className="cardTitle">Asignatura</p>
              <p className="cardText">codigo**</p>
            </div>
            <div className="btn">
              <button className="btnInfo">+informacion</button>
              <img
                className="imgInfo"
                src="../../../public/img/infoIcon.png"
                alt="info Icon"
              />
            </div>
          </div>
        </NavLink>
        <NavLink className="navDeco" to={"#"}>
          <div className="card">
            <div className="element">
              <p className="cardTitle">Asignatura</p>
              <p className="cardText">codigo**</p>
            </div>
            <div className="btn">
              <button className="btnInfo">+informacion</button>
              <img
                className="imgInfo"
                src="../../../public/img/infoIcon.png"
                alt="info Icon"
              />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
