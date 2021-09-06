class Macbook {
  precio() {
    return 1000
  }
}

// Decorator
const memoria = (mac) => {
  const value = mac.precio()
  mac.precio = function () {
    return value + 200
  }
}

const macbook = new Macbook()
memoria(macbook)

console.log(macbook.precio())
