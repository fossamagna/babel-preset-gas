# babel-preset-gas

[![Greenkeeper badge](https://badges.greenkeeper.io/fossamagna/babel-preset-gas.svg)](https://greenkeeper.io/)

> Babel preset for all Goolge Apps Script plugins.

This preset includes the following plugins:

- [transform-es3-member-expression-literals](https://babeljs.io/docs/plugins/transform-es3-member-expression-literals/)
- [transform-es3-property-literals](https://babeljs.io/docs/plugins/transform-es3-property-literals/)

## Example

**In**

```javascript
export.default {
  default: true
}
```

**Out**

```javascript
export["default"] = {
  "default": true
}
```

## Installation

```sh
npm install --save-dev babel-preset-gas
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["gas"]
}
```

### Via CLI

```sh
babel --presets gas script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["gas"]
});
```
