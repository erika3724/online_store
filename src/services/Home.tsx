import Carrinho from './Carrinho';

function Home() {
  return (
    <div>

      <input type="text" id="home" />
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma
        categoria.
        <Carrinho />
      </h2>
    </div>
  );
}

export default Home;
