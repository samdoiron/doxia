'use strict';

var Comlink = require('comlink');

const app = Comlink.wrap(new Worker('worker.js'));
(async () => {
    console.log(await app.foo());
})();
