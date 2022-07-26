import { heroes } from "../components/data/heroes";


export const getHeroesByPublisher = ( publisher ) => {


    // Hacemos una validacion para que al momento de ingresar la categoria sea uno de los dos disponibles, si normalizePathname, entonces retorna un error
    const validPublishers = ['DC Comics', 'Marvel Comics' ]

    if ( !validPublishers.includes( publisher )){
        throw new Error( `${ publisher } no es valido como categoria `)
    }

    return heroes.filter( heroe => heroe.publisher === publisher );


}