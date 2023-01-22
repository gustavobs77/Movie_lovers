import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home/Home';
import Filmes from '../Pages/Filmes/Filmes';
import Error from '../Pages/Error/Error';
import Favoritos from '../Pages/Favoritos/Favoritos';
import Header from '../Components/Header'

function Rotas () {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/filme/:id' element={<Filmes/>}/>
    <Route path='/favoritos' element ={<Favoritos/>}/>
    <Route path='*' element={<Error/>}/>

  </Routes>
  </BrowserRouter>
  )
}

export default Rotas