class MyClass {
  constructor(p1, p2 = 2) {
    this.propiedad = p1;
    this.propiedad2 = p2;
  }

  method = () => {
    // I am a prototyping method
  };
}

const instance = new MyClass(4, 3);
console.log(instance);

//Copy and paste console browser to watch

// Practical example of pattern builder, with prototype

Object.prototype.log = function () {
  console.log(this);
};

const newObject = { a: 1 };
newObject.log();

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    try {
      return this.replace(/^\s+|\s+$/g, '');
    } catch (error) {
      return this;
    }
  };
}

const y = '   lalala  '.trim();
y.log();
