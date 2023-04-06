import React, { useEffect, useState } from "react";
import country from '../utils/JSON/paises.json';

const OrdenAscDesc = () =>
{
  const [ paises, setPaises ] = useState( country );
  const [ orden, setOrden ] = useState( "" );
  const [ error, setError ] = useState( null );

  if ( error )
  {
    return <p>Error de carga: { error.message }</p>;
  }

  const paisesFiltrados = paises.sort( ( a, b ) =>
  {
    if ( orden === "asc" )
    {
      return a.countryName.localeCompare( b.countryName );
    } else if ( orden === "desc" )
    {
      return b.countryName.localeCompare( a.countryName );
    } else
    {
      return true;
    }
  } );

  const ordenAlfabetico = ( orden ) =>
  {
    setOrden( orden );

  }

  return (
    <div className="mt-3 mb-5">
      <button onClick={ () => ordenAlfabetico( "asc" ) } className="btn btn-success mx-3">ASC</button>
      <button onClick={ () => ordenAlfabetico( "desc" ) } className="btn btn-danger mx-3">DESC</button>
      <div className="row">
        { paisesFiltrados.map( ( pais ) => (
          <div key={ pais.countryName } className="col-md-4" >
            <div className="card mt-5" >
              <div className="card-header">
                <h2>{ pais.countryName }</h2>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Poblacion:</b> { pais.population }</li>
                <li className="list-group-item"><b>Capital:</b>  { pais.capital }</li>
                <li className="list-group-item"><b>Continente populares:</b> { pais.continentName }</li>
              </ul>
            </div>
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default OrdenAscDesc;