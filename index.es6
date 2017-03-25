exports.pico = (function () {
    const pico = require('./src/pico');

    function printInfo() {
        let val = pico.getCurrentPowerMode();
        console.log('Current power mode :', pico.getPowerModeLabel(val));
        console.log('Current Battery voltage :', pico.getCurrentBatteryVoltage(), 'V');
        console.log('Current Power voltage :', pico.getCurrentRpiVoltage(), 'V');
        console.log('Temperature :', pico.getTemperature(), '°C');
    }
    pico.printInfo = printInfo;

    return pico;
}());