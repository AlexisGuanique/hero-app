import {useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers';

export const HeroScreen = () => {

  // Nos sirve para obtener los parametros
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById(heroId), [ heroId ]);

  // con esto configuramos nuestro boton para que nos permita navegar una pagina atras 
  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to='/marvel' />
  }


  return (
    <div className='row mt-5 animate__animated animate__fadeInBottomRight'>
      <div className='col-4'>
        <img
          src={`../../../assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail'

        />
      </div>

      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-gruop-flush'>
          <li className='list-gruop-item'> <b>Alter Ego:</b> {hero.alter_ego} </li>
          <li className='list-gruop-item'> <b>Editorial:</b> {hero.publisher} </li>
          <li className='list-gruop-item'> <b>Primera Edición:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p> {hero.characters} </p>

        <button
          className='btn btn-outline-primary'
          onClick={onNavigateBack}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
