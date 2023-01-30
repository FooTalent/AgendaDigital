import './selectReact.css'
import { useState } from "react";
import { Link } from 'react-router-dom';

const SelectReact = () => {
    const [deploymentSelect, setDeploymentSelect] = useState(false);

    const deployment = () => deploymentSelect === false ? setDeploymentSelect(true) : setDeploymentSelect(false);
    
  return (
    <div>
      <div onClick={deployment} className="selectContainer">
        <img className="userSelect" src="./img/user.svg" alt="user" />
        <p className='disabledUserMobile'>Admin</p>
        <img src="./img/despliegueSelect.svg" alt="flecha" />
      </div>
      <div
        className={`${
          deploymentSelect ? "containerDeployment" : "disabledDeployment"
        }`}
      >
        <div className="selectNav">
          <img className='imgSelect' src="./img/userSelect.svg" alt="usuario" />
          <Link className='miPerfilSelect'>
            <p>Mi perfil</p>
          </Link>
        </div>
        <div className="selectNav">
          <img className='imgSelect' src="./img/cerrarSesionSelect.svg" alt="cerrar sesion" />
          <Link className='closeSessionSelect'>
            <p>Cerrar sesión</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectReact;
