'use strict'
const { asyncIterator } = Symbol

module.exports = function isAsyncIterable(value) {
	return typeof value?.[ asyncIterator ] === 'function'
}
