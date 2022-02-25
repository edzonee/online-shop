export async function fetchurl() {
  const url =
    'https://online-shop-79277-default-rtdb.europe-west1.firebasedatabase.app/.json';
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
export class Products {
  #name
  #price
  #quantity
  #photo
  
  constructor(name, price, quantity, photo){
    this.#name = name
    this.#price = price
    this.#quantity = quantity
    this.#photo = photo
  }
  getName(){
    return this.#name
  }
  getPrice(){
    return this.#price
  }
  getQuantity(){
    return this.#quantity
  }
  getPhoto(){
    return this.#photo
  }
}
