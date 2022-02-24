class Cart {
  #add;
  #remove;
  #calculate;
  #buy;

  constructor(add, remove, calculate, buy) {
    this.#add = add;
    this.#remove = remove;
    this.#calculate = calculate;
    this.#buy = buy;
  }
  addItem(korv) {
    console.log(korv);
  }
  removeItem() {
    return this.#remove;
  }
  calculatePrice() {
    return this.#calculate;
  }
  buyItems() {
    return this.#buy;
  }
}

console.log(Cart);

export { Cart };