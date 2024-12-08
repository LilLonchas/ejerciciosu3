import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="fotos">Galería</Link>
      <Link to="contacto">Contacto</Link>
    </nav>
  );
}


function Home() {
  return (
    <div>
      <h1>Bienvenidos al Instituto</h1>
      <Outlet />  
    </div>
  );
}


function Fotos() {
  return (
    <div>
      <h2>Galería de fotos</h2>
      <p>¡Explora nuestra galería de fotos!</p>
    </div>
  );
}


function Contacto() {
  return (
    <div>
      <h2>Contacto</h2>
      <p>¿Tienes alguna pregunta? Contáctanos.</p>
      <Outlet /> 
    </div>
  );
}


function NoPage() {
  return <div>PÁGINA DE ERROR 404</div>;
}


function Noticias() {
  const { tipo } = useParams();  

  return (
    <div>
      <h2>Noticias de {tipo}</h2>
      <p>Contenido de noticias relacionado con {tipo}...</p>
    </div>
  );
}

function Rutas() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="fotos" element={<Fotos />} />
          <Route path="contacto" element={<Contacto />}>
            <Route path=":tipo" element={<Noticias />} />  {/* Rutas anidadas para Noticias */}
          </Route>
        </Route>
        <Route path="*" element={<NoPage />} />  {/* Página 404 para rutas no encontradas */}
      </Routes>
    </Router>
  );
}

export default Rutas;
