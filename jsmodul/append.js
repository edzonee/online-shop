import { fetchurl, Products } from "./fetch.js";
import { Cart } from "./cart.js";

console.log(fetchurl());
export async function displayIt() {
  await fetchurl().then((data) => {
    let myStringArray = data.products;

    let myProducts = [];
    for (let i = 0; i < myStringArray.length; i++) {
      const prod = new Products(
        myStringArray[i].name,
        myStringArray[i].price,
        myStringArray[i].quantity,
        myStringArray[i].photo
      );
      myProducts.push(prod);
       
    }
    console.log(myProducts[0].photo)
  });
}
