(function () {
    const pico = require('./src/pico');

    pico.getCurrentPowerMode()
        .then((val) => {
            console.log('Current power mode :', pico.getPowerModeLabel[val]);
        });

    pico.getCurrentBatteryVoltage()
        .then((val) => {
            console.log('Current Battery voltage :', val);
        });

    pico.getCurrentRpiVoltage()
        .then((val) => console.log('Current Power voltage :', val));

    pico.getTemperature()
        .then((val) => console.log('Temperature :', val, '°C'));
}());