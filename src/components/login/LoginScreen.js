import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const LoginScreen = () => {

  const { login } = useContext( AuthContext )

  // El Hook useNavigate nos otorga una funcion que nos permite navegar a otras pantallas
  const navigate = useNavigate()


  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'Alexis Guanique' )

    // el useNavigate recibe un segundo argumento que nos permite manejar a donde queremos volver en caso de querer volver atras en nuestra navegacion
    navigate(lastPath, {
      replace: true
    })
  }


  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}
