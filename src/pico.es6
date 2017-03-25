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
        get powerModes() {
            return powerModes;
        },
        get currentPowerMode() {
            return readBytes(0, 1);
        },
        get currentBatteryVoltage() {
            return readBytes(1, 2);
        },
        get currentRpiVoltage() {
            return readBytes(3, 2);
        }
    };
}());