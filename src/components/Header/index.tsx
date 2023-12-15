import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>HEADER</h2>
      <div>
        <button onClick={ () => navigate('/') }>Home</button>
        <button onClick={ () => navigate('/contact') }>Contato</button>
      </div>
    </div>
  );
}

export default Header;
