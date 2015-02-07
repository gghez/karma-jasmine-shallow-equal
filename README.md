# karma-jasmine-shallow-equal

[![Build Status](https://travis-ci.org/gghez/karma-jasmine-shallow-equal.svg?branch=master)](https://travis-ci.org/gghez/karma-jasmine-shallow-equal)
[![NPM version](https://badge.fury.io/js/karma-jasmine-shallow-equal.png)](http://badge.fury.io/js/karma-jasmine-shallow-equal)

From Michel Salib's implementation for `chai` (https://github.com/michelsalib/chai-shallow-deep-equal/): Implementation as a karma framework plugin.

Will shallowly perform a deep equal assertion in an object graph.



## Installation

Direct install:

```
npm install karma-jasmine-shallow-equal --save-dev
```

Reference as dev dependencies in *package.json* of your project:

```js
...
  "devDependencies": {
    "karma-jasmine-shallow-equal": "~x.x.x"
  }
...
```

Reference in *karma.conf.js*:

```js
...
  frameworks: ['jasmine', 'jasmine-shallow-equal']
...
```

## Example

```js
expect({
  name: 'Michel',
  language: 'javascript',
  tags: [
    'developer',
    'gamer'
]}).toShallowEqual({
  name: 'Michel',
  tags: ['developer']
});
```

More example here: https://github.com/michelsalib/chai-shallow-deep-equal/
