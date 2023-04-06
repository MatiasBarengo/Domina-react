import { useEffect, useState } from 'react';

const PerfilesDeUsuario = () =>
{
  const [ users, setUser ] = useState( [] )
  const [ error, setError ] = useState( null )

  useEffect( () =>
  {
    const fetchData = async () =>
    {
      try
      {
        const response = await fetch( 'https://randomuser.me/api/?results=10' )
        const data = await response.json();
        setUser( data.results )
      } catch ( err )
      {
        setError( err )
      }
    }
    fetchData()

  }, [] )

  if ( error )
  {
    <h1>Error: { error.message }</h1>
  }

  return (
    <div>
      <div className="row ml-5">
        <h2>Lista de perfiles</h2>
      </div>
      <div className="row ml-5 my-5">
        { users.map( ( user ) => (
          <div className="col-md-4 my-3" key={ user.id.value } >
            <div className="card">
              <div className="card-header">
                <h4>{ user.name.first } { user.name.last }</h4>
              </div>
              <div className="card-body">
                <p className="card-text"><strong>Edad:</strong>{ user.dob.age }</p>
                <p className="card-text"><strong>País:</strong> { user.location.country }</p>
              </div>
            </div>
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default PerfilesDeUsuario;