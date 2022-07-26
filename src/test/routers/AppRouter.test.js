import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/context/AuthContext';
import { AppRouter } from '../../routers/AppRouter';



describe('Pruebas en el <AppRouter />', () => {

    test('Debe de mostrar el loginScreen si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        // No se el motivo, pero debo investigar porque no me anda con el MemoryRouter =(  
        
        render(
            // <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            // </MemoryRouter>

        );

        // screen.debug();

        expect( screen.getAllByText('LoginScreen').length ).toBe(1);

    });

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Juan Carlos'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                {/* <MemoryRouter initialEntries={['/login']}> */}
                    <AppRouter />
                {/* </MemoryRouter> */}
            </AuthContext.Provider>
        )

        // screen.debug();

        // toBeGreaterThanOrEqual significa que es mayor o igual a uno
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);



    })


    
});