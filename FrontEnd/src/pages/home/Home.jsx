import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import '../../../src/index.css';

const Home = () => {

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
                        <img className='img-log-dos' src="../img/img-log2.svg" alt="" />
                    </figure>
                    <p className='p-log'>¡Te damos la bienvenida!</p>
                    <NavLink  style={({isActive}) => isActive ? activeStyle : styleDefault} className='btn-log' to={"/login"} ><p >Iniciar sesión</p></NavLink>
                </div>
            </div>
        </>
    );
};

export default Home;