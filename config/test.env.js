'use strict'
const merge = require('webpack-merge')
const prodEvn = require('./dev.env')

module.exports = merge(prodEvn, {
  NODE_ENV: '"development"',
  base: '"http://test.linktoc"',
  baseImgUrl: '"http://test.linktoc.img/Url"'
})
