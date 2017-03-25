'use strict';

(function () {
    var pico = require('./src/pico');

    pico.getPowerMode().then(function (val) {
        return console.log('Current power mode :', pico.powerModes[val]);
    }).currentBatteryVoltage().then(function (val) {
        return console.log('Current Power voltage :', val);
    }).currentRpiVoltage().then(function (val) {
        return console.log('Current Power voltage :', val);
    });
})();
//# sourceMappingURL=index.js.map