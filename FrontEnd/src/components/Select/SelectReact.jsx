import './selectReact.css'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const SelectReact = () => {
    const [deploymentSelect, setDeploymentSelect] = useState(false);
    const { nameUser } = useContext(GlobalContext);

    const deployment = () => deploymentSelect === false ? setDeploymentSelect(true) : setDeploymentSelect(false);

    let activeStyle = { 
      color: "var(--bg-btn)",
      textDecoration: "none"
    };
  
    let styleDefaultText = {
      textDecoration: "none",
      color: "var(--bg-btn)",
    };
  return (
    <div>
      <div onClick={deployment} className="selectContainer">
        <img className="userSelect" src="../../../img/user.svg" alt="user" />
        <p className='disabledUserMobile'>{ nameUser }</p>
        <img src="../../../img/despliegueSelect.svg" alt="flecha" />
      </div>
      <div
        className={`${
          deploymentSelect ? "containerDeployment" : "disabledDeployment"
        }`}
      >
        <div className="selectNav">
          <img className='imgSelect' src="../../../img/userSelect.svg" alt="usuario" />
          <NavLink style={({isActive}) => isActive ? activeStyle : styleDefaultText} to={"/profile"} className='miPerfilSelect'>
            <p className='textSelectNav'>Mi perfil</p>
          </NavLink>
        </div>
        <div className="selectNav">
          <img className='imgSelect' src="../../../img/iconConfig.svg" alt="configuración" />
          <NavLink style={({isActive}) => isActive ? activeStyle : styleDefaultText} to={"#"} className='miPerfilSelect'>
            <p className='textSelectNav'>Configuración</p>
          </NavLink>
        </div>
        <div className="selectNav">
          <img className='imgSelect' src="../../../img/cerrarSesionSelect.svg" alt="cerrar sesion" />
          <NavLink style={({isActive}) => isActive ? activeStyle : styleDefaultText} to={"/"} className='closeSessionSelect'>
            <p className='textSelectNav'>Cerrar sesión</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SelectReact;
