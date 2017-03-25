(function () {
    const pico = require('./src/pico');

    pico.getCurrentPowerMode()
        .then((val) => {
            console.log('Current power mode :', pico.powerModes[val]);
        });
    pico.getCurrentBatteryVoltage()
        .then((val) => {
            console.log('Current Power voltage :', val);
        });
    pico.getCurrentRpiVoltage()
        .then((val) => console.log('Current Power voltage :', val));
}());