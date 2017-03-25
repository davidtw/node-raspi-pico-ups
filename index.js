'use strict';

(function () {
    var pico = require('./src/pico');

    pico.getCurrentPowerMode().then(function (val) {
        console.log('Current power mode :', pico.powerModes[val]);
    });
    pico.getCurrentBatteryVoltage().then(function (val) {
        console.log('Current Power voltage :', val);
    });
    pico.getCurrentRpiVoltage().then(function (val) {
        return console.log('Current Power voltage :', val);
    });
})();
//# sourceMappingURL=index.js.map