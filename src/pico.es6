module.exports = (function () {
    const i2c = require('i2c-bus');
    const i2c1 = i2c.openSync(1);
    const address = 0x69;

    const powerModes = ['usb', 'battery'];

    function readByte(command) {
        return i2c1.readByteSync(address, command);
    }

    function readWord(command) {
        return i2c1.readWordSync(address, command);
    }

    return {
        getPowerModeLabel (mode) {
            if (!mode || mode >= powerModes.length) {
                return undefined;
            }
            return powerModes[mode - 1];
        },
        getCurrentPowerMode: () => {
            return readByte(0x00);
        },
        getCurrentBatteryVoltage: () => {
            return readWord(0x08);
        },
        getCurrentRpiVoltage: () => {
            return readWord(0x0a);
        },
        getTemperature: () => {
            return readWord(0x1b);
        }
    };
}());