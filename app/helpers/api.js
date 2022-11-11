
const NAME = 'tienda--bsale',
  ENDPOINT = `https://${NAME}.herokuapp.com/api`,
  PRODUCTS = `${ENDPOINT}/productos`,
  SEARCH = `${PRODUCTS}?categoria=`;

export default {
  PRODUCTS,
  SEARCH,
}
