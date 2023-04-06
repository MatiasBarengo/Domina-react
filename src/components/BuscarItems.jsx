import React, { useState, useEffect } from "react";
import country from '../utils/JSON/paises.json';

const BuscarItems = () =>
{
  const [ paises, setPaises ] = useState( country );
  const [ busqueda, setBusqueda ] = useState( "" );
  const [ error, setError ] = useState( null );

  if ( error )
  {
    return <p>Error de carga: { error.message }</p>;
  }

  const paisesFiltrados = paises.filter( ( pais ) =>
    pais.countryName?.toLowerCase().includes( busqueda.toLocaleLowerCase() )
  );

  return (
    <div>
      <input
        type="text"
        value={ busqueda }
        onChange={ ( e ) => setBusqueda( e.target.value ) }
        placeholder="Busca un país..."
      />

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
                <li className="list-group-item"><b>Continente:</b> { pais.continentName }</li>
              </ul>
            </div>


          </div>
        ) ) }
      </div>

    </div>
  );
};

export default BuscarItems;