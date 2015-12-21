const path = require('path')
const Server = require('karma').Server

module.exports = function () {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }).start()
}
