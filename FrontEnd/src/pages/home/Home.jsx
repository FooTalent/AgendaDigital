import React from 'react';
import Login from '../../components/Login/Login';
import { NavLink } from 'react-router-dom';
import './home.css';
import '../../../src/index.css';

const Home = () => {


    const login = () => {
        <>
          <Login/>
        </>

    }
    let activeStyle = { 
        color: "var(--white)",
        textDecoration: "none"
      };
    
      let styleDefault = {
        textDecoration: "none",
        color: "#ffff"
      };


    return (
        <>
            <div className='containerLogin'>
                <div className='containerElement'>
                    <figure>
                        <img className='img-log-dos' src="../../../public/img/imgl2.png" alt="" />
                    </figure>
                    <p className='p-log'>¡Te damos la bienvenida!</p>
                    <NavLink  style={({isActive}) => isActive ? activeStyle : styleDefault} className='btn-log' to={"/login"} ><p onClick={login} >Iniciar sesión</p></NavLink>
                </div>
            </div>
        </>
    );
};

export default Home;