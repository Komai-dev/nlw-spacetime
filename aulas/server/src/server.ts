import fastify from 'fastify'

// HTTP Method: GET, POST, PUT, PATCH, DELETE

const app = fastify()

app.post('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
