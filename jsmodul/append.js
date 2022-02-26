import { fetchurl, Products } from "./fetch.js";
import { Cart } from "./cart.js";

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
  let cartItems = 0;

  button2.forEach((button) => {
    button.addEventListener("click", (e) => {
/*       cartItems++ */
      console.log(shopCartNumber);
      
      shopCartNumber.innerText = cartItems++;
    });
  });
}
