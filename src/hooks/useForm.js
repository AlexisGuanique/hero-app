import { useState } from 'react'

// Este es un custom hook que se va a encargar de manejar los formularios
export const useForm = (initialState = {}) => {

    // Definimos el estado inicial de nuestro componente
    const [values, setValues] = useState(initialState)

    // Creamos una funcion que nos permita realizar cambios en nuestro formulario
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    };

    // Creamos una funcion que permita hacer el envio de la informacion con algun boton que configuremos, ... 
    // ... ademas nos muestra la informacion guardada impresa en consola =D
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    };

    // Creamos una funcion que resetea el campo del formulario una vez realizado el cambio
    const reset = () => {
        setValues(initialState)
    };

    // Importamos las funciones creadas de nuestro custom Hook
    return {
        ...values,
        handleInputChange,
        reset,
        handleSubmit
    }

}