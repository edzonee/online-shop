import { fetchurl, Products } from "./fetch.js";
import { Cart } from "./cart.js";

const myCart = [];
let myProducts = [];
export async function displayIt() {
  await fetchurl().then((data) => {
    let myStringArray = data.products;


    for (let i = 0; i < myStringArray.length; i++) {
      const prod = new Products(
        myStringArray[i].name,
        myStringArray[i].price,
        myStringArray[i].quantity,
        myStringArray[i].photo,
        myStringArray[i].id
      );

      myProducts.push(prod);

      const productsCard = document.createElement("div");
      productsCard.classList.add("Products");
      const cardWrap = document.createElement("div");
      cardWrap.classList.add("card");

      document.body.appendChild(cardWrap);

      const price = document.createElement("div");
      price.classList.add("price");
      price.innerText = "Price: " + myStringArray[i].price + " kr";
      const descrip = document.createElement("h4");
      descrip.classList.add("description");
      descrip.innerText = myStringArray[i].name;

      const quantity = document.createElement("div");
      quantity.innerText = "Quantity: " + myStringArray[i].quantity;

      const button = document.createElement("button");
      button.classList.add("buttonbuy");
      button.setAttribute('id', i)
      button.innerText = "Buy";

      const photo = document.createElement("img");
      photo.src = myStringArray[i].photo;

      productsCard.appendChild(descrip);
      cardWrap.appendChild(button);
      cardWrap.append(productsCard);
      productsCard.appendChild(photo);
      productsCard.appendChild(price);
      productsCard.appendChild(quantity);
    }

    console.log(Number);
    myButtonFunction(myStringArray);

    console.log(myProducts);
  });
}

function myButtonFunction(myStringArray) {
  let button2 = document.querySelectorAll(".buttonbuy");
  let shopCartNumber = document.querySelector(".num-items");
  let cartItems = 1;
  button2.forEach((button) => {
    button.addEventListener("click", (e) => {
      /*       cartItems++ */
      let body = document.getElementById("test")
      console.log(e.target);
      console.log(myProducts[e.target.id].getName())
      console.log(myProducts[e.target.id].getPrice())
      let shopId = document.createElement('li')
      let amountOfProducts = document.createElement('p')
      body.append(shopId)
      body.append(amountOfProducts)
      amountOfProducts.innerText = 0
      shopId.style.listStyle = 'none'
      shopId.innerText = myProducts[e.target.id].getName()
      shopId.setAttribute('test', e.target)


      /*        console.log(myProducts[e.target.id].getIncrement()) */

      shopCartNumber.innerText = cartItems++;
    });
    const cart = new Cart();
    for (let i = 0; i < myStringArray.length; i++) {

      console.log(myStringArray[i].id)
    }
    cart.addItem(myProducts[0]);
    console.log(cart);
  });
}
