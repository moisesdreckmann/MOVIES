import { Link } from 'react-router-dom';
import pipoca from '../assets/pipoca.png'
import '../App.css'

function Navbar({ className }) {
  return (
    <nav className={className}>
      <img src={pipoca} className="pipoca" alt="icone pipoca" />
      <Link to="/">Home</Link>
      <Link to="/acao">Ação</Link>
      <Link to="/aventura">Aventura</Link>
      <Link to="/comedia">Comedia</Link>
      <Link to="/drama">Drama</Link>
      <Link to="/faroeste">Faroeste</Link>
      <Link to="/thriller">Thriller</Link>
    </nav>
  );
}

export default Navbar;