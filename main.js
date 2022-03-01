import { Cart } from "./jsmodul/cart.js";
import { displayIt } from "./jsmodul/append.js";

const cart = new Cart();
console.log(cart);
/* cart.addItem('ny produkt'); */
cart.addItem('en till produkt');
console.log(cart);

displayIt();
// expandingList();
// new HTMLUListElement();
