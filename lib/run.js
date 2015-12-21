const karma = require('./karma')

module.exports = function () {
  console.log(argv._[1])
  switch (argv._[1]) {
    case 'karma':
      return karma()
    default:
      return
  }
}
