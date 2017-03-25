module.exports = (function () {
    const i2c = require('i2c');
    const address = 0x69;
    const wire = new i2c(address, {device: '/dev/i2c-1'});

    return {
        getPowerMode: () => {
            return wire.readBytes(0, 1, function (err, res) {
                console.log(res);
            });
        }
    };
}());