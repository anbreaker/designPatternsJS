// Peticion https, patron facade es un wrapper para simplificar una peticion.

const https = require("https")
/*
const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/users",
  method: "GET",
}

const request = https.request(options, (response) => {
  response.setEncoding("utf8")
  let body = ""
  response.on("data", (d) => {
    body += d
  })

  response.on("end", (d) => {
    const parsed = JSON.parse(body)
    console.log(parsed)
  })
})

request.on("error", (event) => {
  console.log(event)
})

request.end()
*/

// Con patron facade

const get = (url) =>
  new Promise((resolve, reject) => {
    const comp = url.split("/")
    const host = comp.shift()

    const options = {
      hostname: host,
      path: `/${comp.join("/")}`,
      method: "GET",
    }

    const request = https.request(options, (response) => {
      response.setEncoding("utf8")
      let body = ""
      response.on("data", (d) => {
        body += d
      })

      response.on("end", (d) => {
        const parsed = JSON.parse(body)

        resolve(parsed)
      })
    })

    request.on("error", (event) => {
      reject(event)
    })

    request.end()
  })

const main = async () => {
  const response = await get("jsonplaceholder.typicode.com/users")
  console.log(response, "<-- main")
}
