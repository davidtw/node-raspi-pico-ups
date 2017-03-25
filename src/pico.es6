module.exports = (function () {
    const i2c = require('i2c');
    const address = 0x69;
    const wire = new i2c(address, {device: '/dev/i2c-1'});

    const powerModes = ['battery', 'usb'];

    function readBytes(start, length) {
        return new Promise((resolve) => {
            wire.readBytes(start, length, function (err, res) {
                resolve(res[0]);
            });
        });
    }

    return {
        getPowerModeLabel (mode) {
            if(!mode || (mode + 1) > powerModes.length) {
                return undefined;
            }
            return powerModes[mode + 1];
        },
        getCurrentPowerMode: () => {
            return readBytes(0, 1);
        },
        getCurrentBatteryVoltage: () => {
            return readBytes(8, 2);
        },
        getCurrentRpiVoltage: () => {
            return readBytes(10, 2);
        },
        getTemperature: () => {
            return readBytes(27, 1);
        }
    };
}());