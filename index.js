'use strict';

exports.pico = function () {
    var pico = require('./src/pico');

    function printInfo() {
        var val = pico.getCurrentPowerMode();
        console.log('Current power mode :', pico.getPowerModeLabel(val));
        console.log('Current Battery voltage :', pico.getCurrentBatteryVoltage(), 'V');
        console.log('Current Power voltage :', pico.getCurrentRpiVoltage(), 'V');
        console.log('Temperature :', pico.getTemperature(), '°C');
    }

    return {
        pico: pico,
        printInfo: printInfo
    };
}();
//# sourceMappingURL=index.js.map