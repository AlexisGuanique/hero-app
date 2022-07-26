import { authReducer } from "../../../auth/context/authReducer"
import { types } from "../../../auth/types/types";

describe('Pruebas en el <AuthReducer />', () => {


    test('Debe retornar un estado por defecto', () => {

        const state = authReducer( {logged: false}, {});

        expect( state ).toEqual( {logged: false} );
    });

    test('Debe de llamar el login y autenticar el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: 123
            }
        }

        const state = authReducer({logged: false}, action);

        
        expect( state ).toEqual( { logged: true, user: action.payload })

    });


    test('Debe de (logout) borrar el name del usuario y logged false', () => {

        const state = {
            logged: true,
            name: { name: 'Carlos', id: 123}
        };

        const action = { type: types.logout};
        const newState = authReducer( state, action);


        expect( newState ).toEqual( { logged: false } );
    });
})