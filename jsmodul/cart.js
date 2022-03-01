import { displayIt } from "./append.js";
class Cart {

  #products = {
    id: null,
    name: null,
    myItems: null,
    price: null
  }

  #shoppingCart = []

  addItem(korv) {
    
    //1) om #peoducts är tom - lägg till
    //2) annars loopa igenom #products
    //3) Om någon av #products-produkterna har samma namn som korv - ändra quantity men lägg inte till en ny
    //4) Om ingen av #products-produkterna har samma namn som korv - lägg till korv


    let i = this.#shoppingCart.findIndex((value) => value.id === korv.id);
      //så om index finns, vill jag lägga till ett värde
      if (i !== -1){
        this.#shoppingCart[i].myItems++
      } else {
        this.#products = korv;
        this.#shoppingCart.push(this.#products)
      }
      /* this.#products.push({
        product: korv,
        quantity: 1,
      }); */
    
    }

  /*   console.log('Result', korv) */
    // let addItem = true;
    // for(){
    //   if(finns){
    //     addItem = false;
    //     break;
    //   }
    // }
    // if(addItem){
    //   lägg till till arraeyn
    // } 

    

    
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
