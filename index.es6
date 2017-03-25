(function () {
    const pico = require('./src/pico');

    pico
        .getPowerMode()
        .then((val) => console.log('Current power mode :', pico.powerModes[val]))
        .currentBatteryVoltage()
        .then((val) => console.log('Current Power voltage :', val))
        .currentRpiVoltage()
        .then((val) => console.log('Current Power voltage :', val));
}());