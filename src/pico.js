'use strict';

module.exports = function () {
    var i2c = require('i2c');
    var address = 0x69;
    var wire = new i2c(address, { device: '/dev/i2c-1' });

    return {
        getPowerMode: function getPowerMode() {
            return new Promise(function (resolve) {
                wire.readBytes(0, 1, function (err, res) {
                    resolve(res.toString('utf-8'));
                });
            });
        }
    };
}();
//# sourceMappingURL=pico.js.map