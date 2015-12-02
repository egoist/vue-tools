#!/usr/bin/env node
global.argv = require('minimist')(process.argv.slice(2), { '--': true })
require('./')(argv)
