import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';


import { AuthContext } from "../../auth/context/AuthContext";
import { PublicRoute } from "../../routers/PublicRoute";


describe('Pruebas en el <PublicRoutes />', () => {

    test('Si no esta autenticado debe de mostrar el children', () => {


        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Hola Mundo</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Hola Mundo')).toBeTruthy();

    });

    test('Debe de navegar si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Alexis',
                id: 123
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Hola Mundo</h1>
                            </PublicRoute>
                        } />

                        <Route path='marvel' element={<h1>Pagina Marvel</h1>} />

                    </Routes>


                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Pagina Marvel')).toBeTruthy();



    });


});