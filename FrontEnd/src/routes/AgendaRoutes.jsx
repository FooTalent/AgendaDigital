import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
/* import Home from '../pages/home/Home'; */
import NotFound from '../pages/notfound/NotFound';
import Usuarios from '../pages/usuarios/Usuarios';

const AgendaRoutes = () => {
    return (
        <>
            {/* colocar nav */}
            <Routes>
                <Route path='/dashboard' element={ <Dashboard/> }/>
                <Route path='/usuarios' element={ <Usuarios/> }/>
                <Route path='*' element={ <NotFound/> }/>
            </Routes>
            {/* colocar footer*/}
        </>
    );
};

export default AgendaRoutes;