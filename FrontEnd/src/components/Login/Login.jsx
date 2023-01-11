import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './login.css'

const Login = () => {

    let activeStyle = { 
        color: "var(--white)",
        textDecoration: "none"
      };
    
      let styleDefault = {
        textDecoration: "none",
        color: "#ffff"
      };
      


   const visible = () => {
    const pass = document.getElementById('password')
    
    if (pass.type === 'password') {
        pass.type = 'text'
      
    }
    else if (pass.type === 'text') {
        pass.type = 'password'
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
                            <input id = "password" type = "password" className='password' placeholder='Contraseña'/> 
                            <div className='divPass'>
                                <Link><img onClick={visible} className='iconPasswordUno'  src="../../../public/img/ojo-cerrado.svg" alt="" /></Link>
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