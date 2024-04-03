var fs = require('fs')
const path = require('path')
const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  const stream = fs.createReadStream(path.resolve('page.html'))
  return stream
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()