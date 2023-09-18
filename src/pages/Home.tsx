import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Categores from '../components/Categores';
import { getProductTermo, getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';

function Home() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [termo, setTermo] = useState<string>('');
  const botao = () => {
    navigate('/cart');
  };
  const prop = async (paramId:string, paramQuery:string) => {
    const b = await getProductsFromCategoryAndQuery(paramId, paramQuery.replace(/\s/g, '').replace(',', ''));
    setProduct(b);
  };
  const query = async () => {
    const c = await getProductTermo(termo.replace(/\s/g, '').replace(',', ''));
    setProduct(c);
  };
  return (
    <main>

      <input
        data-testid="query-input"
        type="text"
        id="home"
        onChange={ ({ target }) => setTermo(target.value) }
      />
      <button data-testid="query-button" onClick={ () => query() }>Buscar</button>
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
        <Categores prop={ prop } />
      </aside>
      <Products product={ product } />
    </main>
  );
}

export default Home;
