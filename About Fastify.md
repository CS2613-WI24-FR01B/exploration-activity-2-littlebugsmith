# The Fastify Library
Fastify is a web framework designed for Javascript. [MORE DESC]

[MAIN FEATURES]

[HOW TO INSTALL FASTIFY, W/ CODE SNIPPETS]
# Installation & Setup
To add the Fastify package to your system, simply install from a terminal using npm or yarn.
```
npm i fastify
```
Or
```
yarn add fastify
```

In order to use the package, you must create a Fastify server. The setup looks like this:
```js
// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})
// CommonJs
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})
```

Side note: By default, your server is connected to the localhost interface (127.0.0.1). To cover any IPV4 interface, set the following parameter in ```fastify.listen```:
```js
fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
```

With the server in place, you can now use Fastify's wide array of tools. Most come in the form of "plugins," as opposed to the usual object-based scope of Javascript. Fastify has over 

[EXAMPLE PROGRAMS]

[LEGACY OF FASTIFY + CONCLUSION]

[REFERENCES]
