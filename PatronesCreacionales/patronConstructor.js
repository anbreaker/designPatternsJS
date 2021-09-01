class MyClass {
  constructor(p1, p2 = 2) {
    this.propiedad = p1;
    this.propiedad2 = p2;
    this.method = () => {
      // I am method
    };
  }
}

const instance = new MyClass(4, 3);

console.log(instance);
