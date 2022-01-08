const path = require('path')
const fastify = require('fastify')({
  logger: true
})
fastify.register(require('fastify-static'), {
  root: path.join(__dirname),
})

fastify.get('/', function (req, reply) {
  return reply.sendFile('k.html')
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
