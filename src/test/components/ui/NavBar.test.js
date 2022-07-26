import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';


import { AuthContext } from '../../../auth/context/AuthContext';
import { Navbar } from '../../../components/ui/NavBar';


// De esta manera mockeamos una libreria ElementInternals, pero solo sobreescribimos lo que queremos
// En este caso solo el useNavigate

const mockedUseNavigate = jest.fn();


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));





describe('Pruebas en el <NavBar />', () => {


    const contextValue = {
        logeed: true,
        user: {
            id: 'abc',
            name: 'Alexis'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario logueado', () => {

        // Al parecer cuando se utiliza el useLocation, al momento de hacer la prueba debemos utilizar el MemoryRouter
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>

        );

        // screen.debug();

        expect(screen.getAllByText('Alexis').length).toBe(1);


    });

    test('Debe de llamar el boton de logout y navigate cuando se hace click en el boton de logout', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>

        );

        const logoutBtn = screen.getByRole('button');

        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true});


    })


})