const init = require('./lib/init')

module.exports = function () {
  switch (argv._[0]) {
    case 'init':
      return init()
    default:
      return
  }
}
