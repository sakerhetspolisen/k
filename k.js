const k = require('path')
const K = require('fastify')({
  logger: true
})
K.register(require('fastify-static'), {
  root: k.join(__dirname),
})

K.get('/', function (re, r) {
  return r.sendFile('k.html')
})

const k_ = async () => {
  try {
    await K.listen(3000)
  } catch (err) {
    K.log.error(err)
    process.exit(1)
  }
}
k_()
