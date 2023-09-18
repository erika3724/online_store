export default function Products({ product }:any) {
  return (
    <main>
      {
                product.results?.length > 0 ? product.results.map((a:any) => (
                  <button key={ a.id } data-testid="product">
                    <p>
                      { a.title }
                    </p>
                    <img src={ a.thumbnail } alt={ a.thumbnail_id } />
                    <p>
                      { a.price }
                    </p>
                  </button>
                )) : <p>Nenhum produto foi encontrado</p>
            }
    </main>
  );
}
