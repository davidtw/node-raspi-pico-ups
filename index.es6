(function () {
    const pico = require('./src/pico');

    pico.getCurrentPowerMode()
        .then((val) => {
            console.log('Current power mode :', pico.powerModes[val]);
            return pico;
        })
        .getCurrentBatteryVoltage()
        .then((val) => {
            console.log('Current Power voltage :', val);
            return pico;
        })
        .getCurrentRpiVoltage()
        .then((val) => console.log('Current Power voltage :', val));
}());