const users = [
  { edad: 0, nombre: "Magalí", apellido: "Antúnez" },
  { edad: 28, nombre: "Jéssica", apellido: "Pedro" },
  { edad: 3, nombre: "Curro", apellido: "Antúnez" },
  { edad: 35, nombre: "Javier", apellido: "Antúnez" },
]

const traerPrimerInfante = (data) => {
  const infantes = data.filter((infante) => infante.edad < 2)

  const primerInfante = infantes[0]

  const infante = {
    nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
    edad: primerInfante.edad,
  }

  return `El primer infante ${infante.nombreCompleto} tiene ${infante.edad} años.`
}

console.log(traerPrimerInfante(users))
