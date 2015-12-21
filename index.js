const init = require('./lib/init')
const run = require('./lib/run')

module.exports = function () {
  switch (argv._[0]) {
    case 'init':
      return init()
    case 'run':
      return run()
    default:
      return
  }
}
