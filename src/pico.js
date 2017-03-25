'use strict';

module.exports = function () {
    var i2c = require('i2c');
    var address = 0x69;
    var wire = new i2c(address, { device: '/dev/i2c-1' });

    var powerModes = ['battery', 'usb'];

    return {
        get powerModes() {
            return powerModes;
        },
        cuPowerMode: function cuPowerMode() {
            return new Promise(function (resolve) {
                wire.readBytes(0, 1, function (err, res) {
                    resolve(res[0]);
                });
            });
        },
        getPower: getPower
    };
}();
//# sourceMappingURL=pico.js.map