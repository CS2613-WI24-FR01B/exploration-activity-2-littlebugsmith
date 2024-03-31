# The Fastify Library
Fastify is a web framework designed for Javascript. Its primary purpose is to make API development and server hosting easier. Fastify uses a series of "plugins," as opposed to the object-based scope of Javascript. They can be imported easily, with countless features to choose from.

This framework's main appeal is the simplicity - a great deal of the server mounting process is simplified through Fastify's functions and plugins. It can streamline the often slow chore of backend software development, especially when APIs are concerned. Another helpful feature is its built-in logging software, [Pino](https://github.com/pinojs/pino) - optimized to create logs using as little space as possible, moreso than any default setup. In ideal circumstances, Fastify is known to handle up to 30,000 requests per *second.* Other gadgets include support for popular syntax library [TypeScript](https://www.typescriptlang.org/) and the ability to serialize output using [JSON Schema](https://json-schema.org/).

# Installation & Setup
To add the Fastify package to your system, simply install from a terminal using npm or yarn.
```
npm i fastify
```
Or
```
yarn add fastify
```

In order to use the package for a given program, you must create a Fastify server. The setup looks like this:
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
Alternatively, you may choose to use async functions:
```js
import Fastify from 'fastify'
import fastifyView from '@fastify/view';
import ejs from 'ejs';

const fastify = Fastify({
  logger: true
});

// Register @fastify/view plugin and select EJS engine for templates
fastify.register(fastifyView, {
    engine: {
        ejs: ejs,
    },
});

fastify.get('/', async function handler (request, reply) {
    return reply.view('templates/home.ejs', {
        title: 'Homepage'
    });
});

fastify.get('/about', async function handler (request, reply) {
    return reply.view('templates/about.ejs', {
        title: 'About',
        description: 'Description of about page'
    });
});

// Run web server
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
```
Side note: By default, your server is connected to the localhost interface (127.0.0.1). To cover any IPV4 interface, set the following parameter in ```fastify.listen```:
```js
fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
```

With the server in place, you can now use Fastify's wide array of tools in your project.

The Fastify library has become exceedingly popular in recent years. Notable adopters include Microsoft, rideshare service Car2Go, and the dev teams behind a variety of other tools ranging from industrial-logistic support to app telemetry. Packages like Fastify have proven invaluable for Javascript programmers who might otherwise face longer load times and less intuitive API framework for their projects.

This is meant to be a brief introduction to the local framework. For a broader demonstration, check out the sample program!

[REFERENCES]
https://github.com/pinojs/pino
www.typescriptlang.org/
https://json-schema.org/
https://fastify.dev/docs/latest/Guides/Getting-Started/
https://github.com/fastify/example/tree/master
