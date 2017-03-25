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
        getPowerModeLabel: function getPowerModeLabel(mode) {
            if (!mode || mode + 1 > powerModes.length) {
                return undefined;
            }
            return powerModes[mode + 1];
        },

        getCurrentPowerMode: function getCurrentPowerMode() {
            return readBytes(0, 1);
        },
        getCurrentBatteryVoltage: function getCurrentBatteryVoltage() {
            return readBytes(8, 2);
        },
        getCurrentRpiVoltage: function getCurrentRpiVoltage() {
            return readBytes(10, 2);
        },
        getTemperature: function getTemperature() {
            return readBytes(27, 1);
        }
    };
}();
//# sourceMappingURL=pico.js.map