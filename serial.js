var {SerialPort} = require('serialport');

var port = new SerialPort('COM1', {
baudRate: 9600,
parity: 'none',
stopBits: 1,
dataBits: 8,
flowControl: false
});



port.on('open', function(){
console.log('yes port is open');
});

port.on('data', function (data) {
console.log('Data: ' + data);
});