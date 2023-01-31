import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import NavBar from '../Navbar/NavBar'
import SideBar from '../SideBar/SideBar'
import './profileUser.css'

const ProfileUser = () => {

  const { enabled , maximunWidth} = useContext(GlobalContext);

  return (
    <>
      <div className="containerDashboard">
        <SideBar />
        <div className= {`${maximunWidth ? "containerNavDashboard" : "minimunWidth"}`}>
          <NavBar />
          <div className={`containerProfile ${enabled ? "enabledContainer" : null}`}>
            <div className="cardProfile">
              <div className="imageProfile">
                <img src="./img/userImageProfile.svg" alt="user profile" />
              </div>
              <div className="containerInfoProfile">
                <div className="itemProfile ">
                  <h4>Juan Perez</h4>
                  <p>Administrador</p>
                </div>
                <div className="itemProfile">
                  <h4>E-mail</h4>
                  <p>example@mail.com</p>
                  <Link> Cambiar e-mail </Link>
                </div>
                <div className="itemProfile">
                  <h4>Contraseña</h4>
                  <Link> Cambiar contraseña </Link>
                </div>
                <div className="itemProfile">
                  <h4>Información 1</h4>
                  <Link> Cambiar Información 1 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileUser