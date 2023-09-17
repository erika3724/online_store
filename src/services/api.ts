export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}

export async function getProductById() {
  const endPoint = 'https://api.mercadolibre.com/items/MLB1788498332';
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
}
