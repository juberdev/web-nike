

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FloatButtons from '../components/FloatButton'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Contacto from './Contacto'
import Home from './Home'
import Nosotros from './Nosotros'
import NuestroEquipos from './Portafolio'
import Servicios from './Servicios'


export default function Index() {
  // console.log('hola');

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/nuestro-equipo' element={<NuestroEquipos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      < FloatButtons />
      <Footer />
    </BrowserRouter>
  )
}
