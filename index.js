'use strict';

(function () {
    var pico = require('./src/pico');

    pico.getPowerMode().then(function (val) {
        return console.log('Current power mode :', pico.powerModes[val]);
    });
})();
//# sourceMappingURL=index.js.map