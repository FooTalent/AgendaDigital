import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './login.css'
import { useState } from 'react';

const Login = () => {

    const [hidden, setHidden] = useState("password");
    const [img, setImg] = useState ("../../../public/img/ojo-cerrado.svg");


    let activeStyle = { 
        color: "var(--white)",
        textDecoration: "none"
      };
    
      let styleDefault = {
        textDecoration: "none",
        color: "#ffff"
      };

      const visible = () => {
        if(hidden === "password"){
            setHidden("text");
            setImg("../../../public/img/ojo-abierto.svg")
        } else{
            setHidden("password");
            setImg("../../../public/img/ojo-cerrado.svg")
        }
      }

    return (
        <>
            <div className='containerLogin'>
                <form className='formLogin'>
                        <div className='divNameSchool'><p className='nameSchool'>SCHOOL</p></div>
                        <div className='titleLogin'><h1>INICIAR SESIÓN</h1></div>
                    <div className='containerForm'>
                        <div className='containerEmail'>
                            <input className='email' type="text" placeholder='Correo electrónico' />
                            <div className='divEmail'>
                                <img className='iconEmail' src="../../../public/img/correo.svg" alt="" />
                            </div>
                        </div>
                        <div className='containerPass'>
                            <input id = "password" type = {hidden} className='password' placeholder='Contraseña'/> 
                            <div className='divPass'>
                                <Link><img onClick={visible} className='iconPasswordUno'  src={img} alt="" /></Link>
                            </div>
                        </div>
                        <div className='divButtonSession'>
                            <NavLink className='pButton' style={({isActive}) => isActive ? activeStyle : styleDefault} >
                                <p >Iniciar sesión</p>
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div> 
        
        </>
    );
};

export default Login;