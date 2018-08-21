# DotEnv Array

Parse delimiter separated values from env to array. Default delimiter is `,`.

## Install

```shell
npm i dotenv-array -S
## or
yarn add dotenv-array
```

## Usage

```js
require('dotenv').load()

const env = require('dotenv-array')()
// or
process.env = require('dotenv-array')()
```
