import React, { useState, useEffect } from "react";
import country from '../utils/JSON/paises.json'

const ReadMore = () =>
{
  const [ paises, setPaises ] = useState( country );
  const [ mostrarTodo, setMostrarTodo ] = useState( false );
  const [ error, setError ] = useState( null );

  const paisesFiltrados = mostrarTodo ? paises : paises.slice( 0, 3 );

  // const paisesFiltrados = mostrarTodo ? paises : paises.slice(0, paises.length / 2);

  return (
    <div className="mt-3 mb-5">


      { mostrarTodo && <button onClick={ () => setMostrarTodo( false ) } className="btn btn-danger mt-5">Ver menos entradas</button> }

      <div className="row mb-5">
        { paisesFiltrados.map( ( pais ) => (
          <div key={ pais.countryName } className="col-md-3" >


            <div className="card mt-5" >
              <div className="card-header">
                <h2>{ pais.countryName }</h2>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Poblacion:</b> { pais.population }</li>
                <li className="list-group-item"><b>Capital:</b>  { pais.capital }</li>
                <li className="list-group-item"><b>Continente:</b> { pais.continentName }</li>
              </ul>
            </div>


          </div>
        ) ) }
      </div>

      { mostrarTodo ? '' : <button onClick={ () => setMostrarTodo( true ) } className="btn btn-success  mt-5">Ver lista completa</button> }


    </div>
  );
};

export default ReadMore;