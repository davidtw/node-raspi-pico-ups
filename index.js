'use strict';

(function () {
    var pico = require('./src/pico');

    var val = pico.getCurrentPowerMode();
    console.log('Current power mode :', pico.getPowerModeLabel(val));

    console.log('Current Battery voltage :', pico.getCurrentBatteryVoltage(), 'V');

    console.log('Current Power voltage :', pico.getCurrentRpiVoltage(), 'V');

    console.log('Temperature :', pico.getTemperature(), '°C');
})();
//# sourceMappingURL=index.js.map