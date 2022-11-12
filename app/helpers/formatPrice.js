export default function formatPrice(price) {
  const options = {
    style: "currency",
    currency: "CLP",
  };

  const config = new Intl.NumberFormat("USD",options);

  return config.format(price);
}