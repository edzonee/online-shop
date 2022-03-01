import { displayIt } from "./append.js";
class Cart {
  #products = {
    id: null,
    name: null,
    myItems: null,
    price: null,
  };

  #shoppingCart = [];
  addItem(product) {
    console.log(this.#shoppingCart);

    let foundProduct = this.#shoppingCart.find(function funky(p) {
      return product.id == p.id;
    });

    if (foundProduct) {
      let counter = document.getElementById("count-" + foundProduct.id);
      console.log(counter);
      counter.innerText = parseInt(counter.innerText) + 1;
      return false;
    } else {
      console.log("wtf");
      this.#shoppingCart.push(product);
      return true;
    }
  }

  removeItem() {
    //return this.#remove;
  }
  calculatePrice() {
    //return this.#calculate;
  }
  buyItems() {
    //return this.#buy;
  }
}

/* console.log(Cart); */

export { Cart };
