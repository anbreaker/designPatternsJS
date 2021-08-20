const example = (callback) => {
  // muuuuuucho codigo despues...
  const resultado = computacionPesada()
  callback(resultado)
}

const manejarResultado = (resultado) => {
  //
}

example("/users", manejarResultado)
