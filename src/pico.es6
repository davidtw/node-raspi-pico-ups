module.exports = (function () {
    const i2c = require('i2c-bus');
    const i2c1 = i2c.openSync(1);
    const address = 0x69;

    const powerModes = ['battery', 'usb'];

    function readBytes(command) {
        return i2c1.readByteSync(address, command);
    }

    return {
        getPowerModeLabel (mode) {
            if (!mode || (mode + 1) > powerModes.length) {
                return undefined;
            }
            return powerModes[mode + 1];
        },
        getCurrentPowerMode: () => {
            return readBytes(0x00);
        },
        getCurrentBatteryVoltage: () => {
            return readBytes(0x08);
        },
        getCurrentRpiVoltage: () => {
            return readBytes(0x0a);
        },
        getTemperature: () => {
            return readBytes(0x1b);
        }
    };
}());