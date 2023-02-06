
const NAME = 'bsaletest.admoises.com',
  ENDPOINT = `https://${NAME}/api`,
  PRODUCTS = `${ENDPOINT}/productos`,
  CATEGORIES = `${ENDPOINT}/categorias`,
  SEARCH = `${PRODUCTS}?categoria=`;

export default {
  PRODUCTS,
  CATEGORIES,
  SEARCH,
}
