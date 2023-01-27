import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './navbarUsuarios.css'
const NavbarUsuarios = () => {
    return (
        <div className='usersAll-nav'>
            
            <NavLink to='../usuarios/all' className='userAll-btn' style={({ isActive }) => isActive ? {background: '#6889FF', borderTop: '#6928F3 solid 2px'}: undefined}><img src="../img/allusers.png" width='24px' height='24px' alt=""  /> Todos los Usuarios</NavLink>
            <NavLink to='../usuarios/add' className='userAll-btn' style={({ isActive }) => isActive ? {background: '#6889FF', borderTop: '#6928F3 solid 2px'}: undefined}>+ Agregar Usuario</NavLink>
                    </div>
    );
};

export default NavbarUsuarios;