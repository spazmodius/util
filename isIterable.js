'use strict'
const { iterator } = Symbol

module.exports = function isIterable(value) {
	return typeof value?.[ iterator ] === 'function'
}
