# @spazmodius/util

All functions can be imported together, or individually:
```js
const { isIterable } = require('@spazmodius/util')
// or
const isIterable = require('@spazmodius/util/isIterable')
```

# Functions

## isAsyncIterable ( value: any ) : bool
Determines whether the argument can be iterated asynchronously, as in `for await (const item of items)`.

## isIterable ( value: any ) : bool
Determines whether the argument can be iterated synchronously, as in `for (const item of items)`.
