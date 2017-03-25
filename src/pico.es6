module.exports = (function () {
    const i2c = require('i2c');
    const address = 0x69;
    const wire = new i2c(address, {device: '/dev/i2c-1'});

    return {
        getPowerMode: () => {
            return new Promise((resolve) => {
                wire.readBytes(0, 1, function (err, res) {
                    resolve(res.toString('utf-8'));
                });
            });
        }
    };
}());