export function getCity(address) {
  const parts = address.split(",");

  const city = parts[1].trim();

  return city;
}

export function getCountry(address) {
  const parts = address.split(",");

  const country = parts[2].trim();

  return country;
}
