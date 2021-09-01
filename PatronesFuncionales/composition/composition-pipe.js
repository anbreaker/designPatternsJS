const users = [
  { edad: 0, nombre: "Magalí", apellido: "Antúnez" },
  { edad: 28, nombre: "Jéssica", apellido: "Pedro" },
  { edad: 3, nombre: "Curro", apellido: "Antúnez" },
  { edad: 35, nombre: "Javier", apellido: "Antúnez" },
]

const pipe =
  (...fns) =>
  (item) =>
    fns.reduce((y, f) => f(y), item)

const filter = (f) => (xs) => xs.filter(f)

const getFirstElement = (primerElemento) => primerElemento[0]

const format = (element) => ({
  nombreCompleto: `${element.nombre} ${element.apellido}`,
  edad: `${element.edad}`,
})

const formatText = (element) =>
  `El primer infante ${element.nombreCompleto} tiene ${element.edad} años.`

const traerPrimerInfante = pipe(
  filter((x) => x.edad < 2),
  getFirstElement,
  format,
  formatText
)

console.log(traerPrimerInfante(users))
