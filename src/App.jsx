import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Acao from './pages/Acao.jsx';
import Aventura from './pages/Aventura.jsx';
import Drama from './pages/Drama.jsx';
import Faroeste from './pages/Faroeste.jsx';
import Home from './pages/Home.jsx';
import Thriller from './pages/Thriller.jsx';
import Comedia from './pages/Comedia.jsx';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/acao" element={<Acao />} />
        <Route path="/aventura" element={<Aventura />} />
        <Route path="/comedia" element={<Comedia />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/faroeste" element={<Faroeste />} />
        <Route path="/thriller" element={<Thriller />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
