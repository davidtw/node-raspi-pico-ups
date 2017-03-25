'use strict';

module.exports = function () {
    var i2c = require('i2c');
    var address = 0x69;
    var wire = new i2c(address, { device: '/dev/i2c-1' });

    return {
        getPowerMode: function getPowerMode() {
            return wire.readBytes(0, 1, function (err, res) {
                console.log(res);
            });
        }
    };
}();
//# sourceMappingURL=pico.js.map