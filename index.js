'use strict';

(function () {
    var pico = require('./src/pico');

    pico.getCurrentPowerMode().then(function (val) {
        console.log('Current power mode :', pico.getPowerModeLabel[val]);
    });

    pico.getCurrentBatteryVoltage().then(function (val) {
        console.log('Current Battery voltage :', val);
    });

    pico.getCurrentRpiVoltage().then(function (val) {
        return console.log('Current Power voltage :', val);
    });

    pico.getTemperature().then(function (val) {
        return console.log('Temperature :', val, '°C');
    });
})();
//# sourceMappingURL=index.js.map