
const NAME = 'tienda--bsale',
  ENDPOINT = `https://${NAME}.herokuapp.com/api`,
  PRODUCTS = `${ENDPOINT}/productos`,
  CATEGORIES = `${ENDPOINT}/categorias`,
  SEARCH = `${PRODUCTS}?categoria=`;

export default {
  PRODUCTS,
  CATEGORIES,
  SEARCH,
}
