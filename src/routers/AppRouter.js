import React from 'react';
import { Routes, Route, BrowserRouter  } from "react-router-dom";


import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';




// Configuramos nuestro Router, este va a manejar nuestras rutas
export const AppRouter = () => {
    return (
        // El BrowserRouter SE COLOCA UNA SOLA VEZ, Y ES EN LA RUTA PADRE
        <BrowserRouter>

            {/* De esta manera configuro mis rutas publicas */}
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />


                {/* De esta manera hacemos las rutas privadas */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />


                
                {/* Aqui tenemos configurada la ruta para el login */}
                {/* <Route path="/login" element={<LoginScreen />} /> */}


                {/* Aqui configuramos las demas rutas a travez del componente DashboardRoutes */}
                {/* <Route path="/*" element={<DashboardRoutes /> } /> */}
            </Routes>
        </BrowserRouter>
    )
}
