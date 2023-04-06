import Trivia from './components/Trivia'
import ConteoRegresivo from './components/ConteoRegresivo'
import SelectorDeClases from './components/SelectorDeClases'
import Reloj from './components/Reloj'
import Sopa from './components/Sopa'
import Dados from './components/Dados'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SigueLaFlecha from './components/SigueLaFlecha'
import BuscarItems from './components/BuscarItems'
import OrdenAscDesc from './components/OrdenAscDesc'
import PerfilesDeUsuario from './components/PerfilesDeUsuario'
import ReadMore from './components/ReadMore'
import ContadorPalabras from './components/ContadorPalabras'
import MostrarOcultarContraseña from './components/MostrarOcultarContraseña'
import ValidarFormulario from './components/ValidarFormulario'
import ActivacionCondicional from './components/ActivacionCondicional'
import Carrito from './components/Carrito'

function App ()
{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Trivia /> } />
          <Route path='/conteoregresivo' element={ <ConteoRegresivo /> } />
          <Route path='/selectordeclases' element={ <SelectorDeClases /> } />
          <Route path='/sopa' element={ <Sopa /> } />
          <Route path='/dados' element={ <Dados /> } />
          <Route path='/siguelaflecha' element={ <SigueLaFlecha /> } />
          <Route path='/reloj' element={ <Reloj /> } />
          <Route path='/buscaritem' element={ <BuscarItems /> } />
          <Route path='/ordenascdesc' element={ <OrdenAscDesc /> } />
          <Route path='/perfilesdeusuario' element={ <PerfilesDeUsuario /> } />
          <Route path='/readmore' element={ <ReadMore /> } />
          <Route path='/contadorpalabras' element={ <ContadorPalabras /> } />
          <Route path='/mostrarocultarcontraseña' element={ <MostrarOcultarContraseña /> } />
          <Route path='/validarformulario' element={ <ValidarFormulario /> } />
          <Route path='/activacioncondicional' element={ <ActivacionCondicional /> } />
          <Route path='/carrito' element={ <Carrito /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
