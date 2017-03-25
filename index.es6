(function () {
    const pico = require('./src/pico');

    let val = pico.getCurrentPowerMode();
    console.log('Current power mode :', pico.getCurrentPowerMode(), pico.getPowerModeLabel[val]);

    console.log('Current Battery voltage :', pico.getCurrentBatteryVoltage());

    console.log('Current Power voltage :', pico.getCurrentRpiVoltage());

    console.log('Temperature :', pico.getTemperature(), '°C');
}());