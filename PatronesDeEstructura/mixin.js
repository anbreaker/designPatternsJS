// Mixin
let mixin = {
  saludar() {
    console.log(`Hola ${this.nombre}`)
  },

  despedir() {
    console.log(`Hasta luego ${this.nombre}`)
  },
}

// Class

class Usuario {
  constructor(nombre) {
    this.nombre = nombre
  }
}

// Aumentamos Prototipo
Object.assign(Usuario.prototype, mixin)

const usuario = new Usuario("Magalí Feliz")
usuario.saludar()
