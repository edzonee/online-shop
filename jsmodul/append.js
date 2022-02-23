class AppendItems {
  #test;
  constructor(test) {
    this.#test = test;
  }
  testing() {
    return this.#test;
  }
}

const testink = new AppendItems("hello");
console.log(testink);

export { AppendItems};
