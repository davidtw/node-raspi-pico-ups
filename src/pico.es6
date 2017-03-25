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
        getPowerModes: () => {
            return powerModes;
        },
        getCurrentPowerMode: () => {
            return readBytes(0, 1);
        },
        getCurrentBatteryVoltage: () => {
            return readBytes(1, 2);
        },
        getCurrentRpiVoltage: () => {
            return readBytes(3, 2);
        }
    };
}());