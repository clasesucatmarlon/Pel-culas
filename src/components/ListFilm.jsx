import React, {useState, useEffect} from 'react';

// import Data from './Data/Data.json'
import PageWrapper from './PageWrapper';
import { Pelicula } from './Pelicula';
import { Paginacion } from './Paginacion';


function ListFilm() {

  const [pagActual, setPagActual] = useState(1)
  const [filmApi, setFilmApi] = useState([])


  const FILM_BY_PAGE = 2;
  let films = filmApi

  useEffect( () => {
    const url = 'https://lucasmoy.dev/data/react/peliculas.json'
    fetch(url)
      .then(response => response.json())
      .then(data => setFilmApi(data))
  }, [])

  const getTotalFilms = () => {
    let totalFilms = filmApi.length
    return Math.ceil(totalFilms / FILM_BY_PAGE)
  }

  let getFilms = films.slice(
    (pagActual - 1) * FILM_BY_PAGE,
    pagActual * FILM_BY_PAGE
  )

  return (
    <PageWrapper>

      
      <Pelicula Data={getFilms}/>
      <Paginacion 
        pagina={pagActual} 
        total={getTotalFilms()}
        onChange={(pagina) => {
          setPagActual(pagina)
        }}
      />
    </PageWrapper>
  );
}

export default ListFilm;
