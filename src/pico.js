'use strict';

module.exports = function () {
    var i2c = require('i2c');
    var address = 0x69;
    var wire = new i2c(address, { device: '/dev/i2c-1' });

    var powerModes = ['battery', 'usb'];

    function readBytes(start, length) {
        return new Promise(function (resolve) {
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
}();
//# sourceMappingURL=pico.js.map