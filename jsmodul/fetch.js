export async function fetchurl() {
  const url =
    'https://online-shop-79277-default-rtdb.europe-west1.firebasedatabase.app/.json';
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
class Products {
  #name
  #price
  #quantitiy
  #photo
  
  constructor(name, price, quantity, photo){
    this.#name = name
    this.#price = price
    this.#quantitiy = quantity
    this.#photo = photo
  }
}