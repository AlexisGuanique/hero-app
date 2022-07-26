import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroList'
import { getHeroesByName } from '../../helpers'


export const SearchScreen = () => {

  // Para hacer la navegacion
  const navigate = useNavigate();

  // Para obtener la informacion de la ubicacion donde nos encontramos
  const location = useLocation();

  // De esta manera nos evitamos procesar nosotros el query enviamo por el formulario
  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q);


  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0


  const { searchText, handleInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (evento) => {
    evento.preventDefault();

    // if( searchText.trim().length <= 1) return;

    // De esta manera navegamos entre paginas y enviamos query params
    navigate(`?q=${searchText}`);

  }



  return (
    <div className="p-5">

      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />


          <form onSubmit={onSearchSubmit} aria-label='form'>
            <input
              type='text'
              placeholder="Busca tu heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {/* {
            // Codigo feo
            (heroes.length >= 1)
              ? <div className="alert alert-primary">Busqueda de heroe</div>
              : ( heroes.length === 0 )
                && <div className="alert alert-danger">No se encontro un heroe con la descripcion <b>{q}</b></div>  
          } */}
          
          <div className="alert alert-primary animate__animated animate__bounce" style={{ display: showSearch ? '' : 'none'}}>
            Busqueda de heroe
          </div>

          <div aria-label='alert-danger' className="alert alert-danger animate__animated animate__flash" style={{ display: showError ? '' : 'none'}}>
            No se encontro un heroe con la descripcion <b>{ q }</b>
          </div>


          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))

          }


        </div>

      </div>
    </div>

  )
}
