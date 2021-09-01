const users = [
  { edad: 0, nombre: "Magalí", apellido: "Antúnez" },
  { edad: 28, nombre: "Jéssica", apellido: "Pedro" },
  { edad: 3, nombre: "Curro", apellido: "Antúnez" },
  { edad: 35, nombre: "Javier", apellido: "Antúnez" },
]

const getFirstElement = (primerElemento) => primerElemento[0]

const format = (element) => ({
  nombreCompleto: `${element.nombre} ${element.apellido}`,
  edad: `${element.edad}`,
})

const formatText = (element) =>
  `El primer infante ${element.nombreCompleto} tiene ${element.edad} años.`

const traerPrimerInfante = (data) => {
  formatText(format(getFirstElement(data.filter((element) => element.edad < 2))))
}

let v1 = getFirstElement(users)
let v2 = format(v1)
let v3 = formatText(v2)
console.log(v3)

traerPrimerInfante(users)
