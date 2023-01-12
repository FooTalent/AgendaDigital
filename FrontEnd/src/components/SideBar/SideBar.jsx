import React from 'react';
import { NavLink } from 'react-router-dom';
import './sideBar.css'

const SideBar = () => {
    return (
        <div className='containerSideBar'>
            <div className="school">
                <p>Escuela</p>
            </div>
            <div className="user">
                <img src='../../../public/img/admin.svg' alt="imagen de usuario" />
                <h3>Admin</h3>
            </div>
            <div className="routes">
                <NavLink className='editNavLink'>
                    <div className= 'route'>
                        <img src="../../../public/img/iconAlumnos.svg" alt="" />
                        <p>Alumnos</p>
                    </div>
                </NavLink>
                <NavLink className='editNavLink'>
                    <div className= 'route'>
                        <img src="../../../public/img/iconAsistencia.svg" alt="" />
                        <p>Asistencia</p>
                    </div>
                </NavLink>
                <NavLink className='editNavLink'>
                    <div className= 'route'>
                        <img src="../../../public/img/iconTareas.svg" alt="" />
                        <p>Tareas</p>
                    </div>
                </NavLink>
                <NavLink className='editNavLink'>
                    <div className= 'route'>
                        <img src="../../../public/img/iconExamenes.svg" alt="" />
                        <p>Exámenes</p>
                    </div>
                </NavLink>
                <NavLink className='editNavLink'>
                    <div className= 'route'>
                        <img src="../../../public/img/iconIncidencias.svg" alt="" />
                        <p>Incidencias</p>
                    </div>
                </NavLink>
                <NavLink className='editNavLink'>
                    <div className= 'route'>
                        <img src="../../../public/img/iconRegistroUsuario.svg" alt="" />
                        <p>Registro Usuarios</p>
                    </div>
                </NavLink>
                <NavLink className='editNavLink'>
                    <div className= 'route'>
                        <img src="../../../public/img/iconConfig.svg" alt="" />
                        <p>Configuración</p>
                    </div>
                </NavLink>
            <NavLink className='editNavLink'>
                <div className='btnClose'>
                    <img src="../../../public/img/iconCerrarSesion.svg" alt="" />
                    <p>Cerrar sesión</p>
                </div>
                    
            </NavLink>
            </div>
        </div>
    );
};

export default SideBar;