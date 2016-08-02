module.exports = [{
  func: require('./src/link'),
  description: 'Links all native dependencies. Optionally skip (-s , --skip) for a platform',
  name: 'linkp [packageName]',
  options: [{
    flags: '-s, --skip [platform]',
    description: 'Skip linking for platform (android or ios)',
    default: '',
  }],
}, {
  func: require('./src/unlink'),
  description: 'Unlink native dependency',
  name: 'unlink <packageName>',
}];
