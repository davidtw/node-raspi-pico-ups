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
        getPowerModes: function getPowerModes() {
            return powerModes;
        },
        getCurrentPowerMode: function getCurrentPowerMode() {
            return readBytes(0, 1);
        },
        getCurrentBatteryVoltage: function getCurrentBatteryVoltage() {
            return readBytes(1, 2);
        },
        getCurrentRpiVoltage: function getCurrentRpiVoltage() {
            return readBytes(3, 2);
        }
    };
}();
//# sourceMappingURL=pico.js.map