import React from 'react';
import { Link } from 'react-router-dom';
import './navbarUsuarios.css'
const NavbarUsuarios = () => {
    return (
        <div className='usersAll-nav'>
            <Link to='../usuarios/all' className='userAll-btn'>& Todos los Usuarios</Link>
            <Link to='../usuarios/add' className='userAll-btn'>+ Agregar Usuario</Link>
            
        </div>
    );
};

export default NavbarUsuarios;