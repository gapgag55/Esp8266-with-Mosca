var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://172.20.10.2:1883')

client.on('connect', function () {
  client.subscribe('esp/test')
  console.log('Connected.')
})

client.on('message', function (topic, message) {
context = message.toString();
  console.log(context)
})