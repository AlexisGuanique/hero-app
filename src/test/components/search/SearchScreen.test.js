import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchScreen } from '../../../components/search/SearchScreen'


const mockedUseNavigate = jest.fn();


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('Pruebas en el <SearchScreen />', () => {

    beforeEach(() => jest.clearAllMocks());

    // Primera prueba
    test('Debe de mostrar correctamente el componente con los valores por defecto', () => {

        const { container } = render(

            <MemoryRouter>
                <SearchScreen />
            </MemoryRouter>

        )

        expect(container).toMatchSnapshot();

    });


    // Segunda prueba
    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {

        const { container } = render(

            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>

        )

        // Verificamos que el valor del input sea el mismo que le pasamos en el queryString
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        // Verificamos que sea la imagen correcta
        const img = screen.getByRole('img');
        expect(img.src).toBe('http://localhost/assets/heroes/dc-batman.jpg');

        // screen.debug();


        // Verificamos que el div correcto tenga la propiedad de display: none
        const alert = screen.getByLabelText('alert-danger');
        // console.log(alert);
        expect(alert.style.display).toBe('none');


    });

    // Tercera prueba
    test('Debe de mostrar un error si no se encuentra el heroe (batman123)', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchScreen />
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('');

    });


    // Cuarta prueba
    test('Debe de llamar el navigate a la pantalla nueva', () => {

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>

        )

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: {name: 'searchText', value: 'superman'}});

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman');

    })


});

// TIP
// Para obtener una etiqyeta en especifica utilizamos el aria-label