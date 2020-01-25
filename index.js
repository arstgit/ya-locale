const fs = require('fs')
const path = require('path')
const requireDir = require('ya-require-dir')

let locale

function loadFromConfigDir(localeDir) {
  if (path.basename(localeDir) !== 'locale') {
    localeDir = path.join(localeDir, 'locale')
  }

  locale = requireDir(localeDir)
}

function trans(str, lang) {
  if (!str || typeof str !== 'string')
    throw new TypeError('Locale trans params: str, must be a string!')
  if (!lang || typeof lang !== 'string')
    throw new TypeError('Locale trans params: lang, must be a string!')

  if (locale[lang] && locale[lang][str]) {
    return locale[lang][str]
  } else {
    return str
  }
}

module.exports.loaded = false
module.exports.load = function(dir) {
  if (dir && typeof dir === 'string') {
    const parentFile = module.parent.filename
    const parentDir = path.dirname(parentFile)

    dir = path.join(parentDir, dir)

    loadFromConfigDir(dir)
  } else {
    throw new TypeError('Locale load dir params must be a string!')
  }

  return (module.exports = trans)
}
