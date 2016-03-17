// /index.js
/*jslint node: true */
'use strict';

var $Q = {
  config: {
    servers: [
      {
        folder: 'webapp',
        port: process.env.PORT || 7600,
        kindOfMagic: 'Magic'
      }
    ]
  }
},
  express = require('express'),
  createServer = function (options) {
    var app = express();
    app.use(express.static(options.folder));
    app.listen(options.port);
    console.log(options.kindOfMagic + ' is happening on http://localhost:' + options.port);
  };

$Q.config.servers.forEach(createServer);