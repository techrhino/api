const strapi = require('strapi');
strapi().start();

// const localtunnel = require('localtunnel');
// (async () => {
//     const tunnel = await localtunnel({ port: 1337 });

//     console.log(tunnel.url)

//     tunnel.on('close', () => {
//         // tunnels are closed
//     });
// })();