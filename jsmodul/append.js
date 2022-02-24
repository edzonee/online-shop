import { fetchurl } from "./fetch.js";

console.log(fetchurl());
export async function displayIt() {
  await fetchurl().then((data) => {
    let myStringArray = data.products;
    let arrayLength = myStringArray.length;
    for (let i = 0; i < arrayLength; i++) {
      const para = document.createElement("div");
      para.classList.add("Products");

      const photo = document.createElement("img");
      photo.src = data.products[i].photo;

      console.log(photo);

      const bodyEl = document.createElement("div");
      bodyEl.classList.add('card')


      document.body.appendChild(bodyEl);

      const price = document.createElement("div");
      price.classList.add('price')
      price.innerText = "Price: " + data.products[i].price + " kr";
      const descrip = document.createElement('h4')
      descrip.classList.add('description')
      descrip.innerText = data.products[i].name;

      const quantity = document.createElement("div");
      quantity.innerText = "Quantity: " + data.products[i].quantity;

      const button = document.createElement('button');
      button.innerText = 'Buy'
      para.appendChild(descrip)

      para.appendChild(price);
      para.appendChild(quantity);
      para.appendChild(photo);
      bodyEl.appendChild(button)
      bodyEl.appendChild(para);

      
      console.log(myStringArray[i]);

    

    }
  });
}
