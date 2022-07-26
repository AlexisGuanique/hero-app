import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../auth/context/AuthContext";


// Esto es para hacer las rutas privadas
export const PrivateRoute = ({ children }) => {
    // Extraemos la condicion logged de AuthContext
    const { logged } = useContext( AuthContext );

    // De esta manera cuando un usuario haga logout y vuelva a eventWrapper, entrara a su ultima pagina
    const { pathname, search } = useLocation()

    const lastPath = pathname + search;
    localStorage.setItem( 'lastPath', lastPath);

    


    // Si la condicion logged es true regresamos el hijo, si Node, lo enviamos a la pantalla de login
    return ( logged )  
    ? children
    : <Navigate to="/login" />
}
