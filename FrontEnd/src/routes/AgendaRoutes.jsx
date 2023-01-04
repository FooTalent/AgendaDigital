import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import NotFound from '../pages/notfound/NotFound';
import Usuarios from '../pages/usuarios/Usuarios';

const AgendaRoutes = () => {
    return (
        <>
            {/* colocar nav */}
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/dashboard' element={ <Dashboard/> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/usuarios' element={ <Usuarios/> }/>
                <Route path='*' element={ <NotFound/> }/>

            </Routes>
            {/* colocar footer*/}
        </>
    );
};

export default AgendaRoutes;