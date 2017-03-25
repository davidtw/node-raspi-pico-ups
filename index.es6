(function () {
    const pico = require('./src/pico');

    pico
        .getPowerMode()
        .then((val) => console.log(val));
}());