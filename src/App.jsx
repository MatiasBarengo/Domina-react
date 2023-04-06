import Trivia from './components/Trivia'
import ConteoRegresivo from './components/ConteoRegresivo'
import SelectorDeClases from './components/SelectorDeClases'
import Reloj from './components/Reloj'
import Sopa from './components/Sopa'
import Dados from './components/Dados'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SigueLaFlecha from './components/SigueLaFlecha'
import BuscarItems from './components/BuscarItems'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
