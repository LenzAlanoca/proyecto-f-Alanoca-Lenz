import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Inicio from './paginas/Inicio';
import Acercade from './paginas/Acercade';
import Deportes from './paginas/Deportes';
import Articulos from './paginas/Articulos';
import Creditos from './paginas/Creditos';
import Atletismo from './paginas/Atletismo';
import Alpinismo from './paginas/Alpinismo';
import Historia from './paginas/Historia';
import Tenis from './paginas/Tenis';
import Footer from './components/Footer';
import Camisetas from './paginas/Camisetas';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Acercade" element={<Acercade />} />
          <Route path="/Deportes" element={<Deportes />} />
          <Route path="/Articulos" element={<Articulos />} />
          <Route path="/Creditos" element={<Creditos />} />
          <Route path="/Atletismo" element={<Atletismo />} />
          <Route path="/Alpinismo" element={<Alpinismo />} />
          <Route path="/Historia" element={<Historia />} />
          <Route path="/Tenis" element={<Tenis />} />
          <Route path="/Camisetas" element={<Camisetas />} />
        </Routes>
      </Router>
      <Footer /> {/* Elimina .js del nombre del componente */}
    </>
  
  );
}

export default App;
