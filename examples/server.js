/* eslint-disable no-console */

'use strict';
var { Server } = require('node-osc');

var oscServer = new Server(3333, '127.0.0.1');

oscServer.on('message', function (msg) {
  console.log(`Message: ${msg}`);
  //oscServer.close();
});
