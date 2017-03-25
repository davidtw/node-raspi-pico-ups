'use strict';

module.exports = function () {
    var i2c = require('i2c-bus');
    var i2c1 = i2c.openSync(1);
    var address = 0x69;

    var powerModes = ['usb', 'battery'];

    function readByte(command) {
        return i2c1.readByteSync(address, command);
    }

    function readWord(command) {
        return i2c1.readWordSync(address, command);
    }

    return {
        getPowerModeLabel: function getPowerModeLabel(mode) {
            if (!mode || mode >= powerModes.length) {
                return undefined;
            }
            return powerModes[mode - 1];
        },

        getCurrentPowerMode: function getCurrentPowerMode() {
            return readByte(0x00);
        },
        getCurrentBatteryVoltage: function getCurrentBatteryVoltage() {
            return parseInt(readWord(0x08), 16);
        },
        getCurrentRpiVoltage: function getCurrentRpiVoltage() {
            return parseInt(readWord(0x0a), 16);
        },
        getTemperature: function getTemperature() {
            return parseInt(readWord(0x1b), 16);
        }
    };
}();
//# sourceMappingURL=pico.js.map