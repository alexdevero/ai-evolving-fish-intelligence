const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  fs.readFile('./src/index.html', (err, data) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(data)
    response.end()
  })
}).listen(1337)

console.log('Server running at localhost:1337')