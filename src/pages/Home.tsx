import { useNavigate } from 'react-router-dom';
import Categores from '../components/Categores';

function Home() {
  const navigate = useNavigate();
  const botao = () => {
    navigate('/cart');
  };
  return (
    <main>

      <input type="text" id="home" />
      <button
        type="button"
        data-testid="shopping-cart-button"
        onClick={ () => botao() }
      >
        Cart

      </button>
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma
        categoria.
      </h2>
      <aside>
        <Categores />
      </aside>
    </main>
  );
}

export default Home;
