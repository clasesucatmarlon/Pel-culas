import React from 'react'

export const Pelicula = ({Data}) => {
  return (
    <div>
      {
        Data.map(item => {
          return (
            <div className="movie-item-style-2">
              <img src={item.img} alt="" />
              <div className="mv-item-infor">
                <h6><a href="moviesingle.html">{item.titulo} </a></h6>
                <p className="rate"><i className="ion-android-star"></i><span>{item.calificacion}</span> /10</p>
                <p className="describe">{item.descripcion}</p>
                <p className="run-time"> Run Time: {item.duracion}. MMPA: PG-13. Release: {item.fecha}</p>
                <p>Director: <a href="/">{item.director}</a></p>
                <p>Stars: <a href="/">{item.actores}</a></p>
              </div>
            </div>
            )
          })
        }
    </div>
  )
}
