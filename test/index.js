let assert = require('assert')
let locale = require('./app')

let result1 = locale('foo', 'zh')
let result2 = locale('bar', 'zh')
let result3 = locale('foo', 'en')

let expected = '仏'
assert.strictEqual(result1, expected)

expected = undefined
assert.strictEqual(result2, expected)

expected = 'foo'
assert.strictEqual(result3, expected)

console.log('test passed!')
