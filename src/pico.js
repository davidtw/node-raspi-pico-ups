'use strict';

module.exports = function () {
    var i2c = require('i2c-bus');
    var i2c1 = i2c.openSync(1);
    var address = 0x69;

    var powerModes = ['battery', 'usb'];

    function readBytes(command) {
        return i2c1.readByteSync(address, command);
    }

    return {
        getPowerModeLabel: function getPowerModeLabel(mode) {
            if (!mode || mode + 1 > powerModes.length) {
                return undefined;
            }
            return powerModes[mode + 1];
        },

        getCurrentPowerMode: function getCurrentPowerMode() {
            return readBytes(0x00);
        },
        getCurrentBatteryVoltage: function getCurrentBatteryVoltage() {
            return readBytes(0x08);
        },
        getCurrentRpiVoltage: function getCurrentRpiVoltage() {
            return readBytes(0x0a);
        },
        getTemperature: function getTemperature() {
            return readBytes(0x1b);
        }
    };
}();
//# sourceMappingURL=pico.js.map