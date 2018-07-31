# babel-preset-gas

> Babel preset for all Goolge Apps Script plugins.

This preset includes the following plugins:

- [babel-plugin-transform-member-expression-literals](https://babeljs.io/docs/en/next/babel-plugin-transform-member-expression-literals)
- [babel-plugin-transform-property-literals](https://babeljs.io/docs/en/next/babel-plugin-transform-property-literals)

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
require("@babel/core").transform("code", {
  plugins: ["gas"]
});
```
