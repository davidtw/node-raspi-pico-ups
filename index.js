'use strict';

(function () {
    var pico = require('./src/pico');

    pico.getPowerMode().then(function (val) {
        return console.log(val);
    });
})();
//# sourceMappingURL=index.js.map