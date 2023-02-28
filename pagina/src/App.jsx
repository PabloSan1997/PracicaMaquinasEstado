import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './componentes/Header'
import { Provedor } from './contexto/contexto'
import { Comidas } from './paginas/Comidas'
import { Final } from './paginas/Final'
import { Inicio } from './paginas/Inicio'
import { Nombres } from './paginas/Nombre'
import { Sopas } from './paginas/Sopas'
import "./estilos/index.css";
function App() {
  return (
    <BrowserRouter>
      <Provedor>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/comidas" element={<Comidas />} />
          <Route path="/sopas" element={<Sopas />} />
          <Route path="/nombre" element={<Nombres />} />
          <Route path="/mandado" element={<Final />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Provedor>
    </BrowserRouter>
  )
}

export default App
