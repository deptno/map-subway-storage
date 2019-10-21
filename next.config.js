const pkg = require('./package.json')
const path = require('path')

const repo = path.parse(pkg.repository.url).name

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production'
    ? `/${repo}`
    : '',
}