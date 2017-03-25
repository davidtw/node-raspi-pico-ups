# node-raspi-pico-ups
Node helper to access pico ups info for pimodules' [HV3.0a 450 model](http://www.pimodulescart.com/shop/item.aspx?itemid=30)

[![NPM Downloads](https://img.shields.io/npm/dt/node-raspi-pico-ups.svg?style=flat-square)](https://www.npmjs.com/node-raspi-pico-ups)
[![License](https://img.shields.io/npm/l/node-raspi-pico-ups.svg?style=flat-square)](https://opensource.org/licenses/MIT)


## Installation

### NPM

```bash
npm install --save node-raspi-pico-ups
```

## Usage

### getPowerModeLabel
Retrurn the label of the power mode (usb or battery)
```javascript
var pico = require('node-raspi-pico-ups').pico;

console.log('Current power mode :', pico.getPowerModeLabel(val));
//Current power mode : usb
```
### getCurrentPowerMode
Returns the current battery mode (1 for usb, 2 for battery)
```javascript
var pico = require('node-raspi-pico-ups').pico;

console.log('Current power mode :', pico.getCurrentPowerMode());
//Current power mode : 1
```

### getCurrentBatteryVoltage
Returns the battery voltage
```javascript
var pico = require('node-raspi-pico-ups').pico;

console.log('Current Battery voltage :', pico.getCurrentBatteryVoltage(), 'V');
//Current Battery voltage : 4.21 V
```

### getCurrentRpiVoltage
Returns the raspberry's current power supply voltage
```javascript
var pico = require('node-raspi-pico-ups').pico;

console.log('Current Power voltage :', pico.getCurrentRpiVoltage(), 'V');
//Current Power voltage : 4.882 V
```

### getTemperature
Returns the temperature mesured by the embedded NTC1 sensor 
```javascript
var pico = require('node-raspi-pico-ups').pico;

console.log('Temperature :', pico.getTemperature(), '°C');
//Temperature : 50 °C
```

### printInfo
Prints collected info to the console 
```javascript
var pico = require('node-raspi-pico-ups');

pico.printInfo();
```
renders :
```bash
Current power mode : usb
Current Battery voltage : 4.21 V
Current Power voltage : 4.882 V
Temperature : 50 °C
```