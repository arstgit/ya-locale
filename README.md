# ya-locale

[![Build Status](https://travis-ci.org/derekchuank/ya-locale.svg?branch=master)](https://travis-ci.org/derekchuank/ya-locale)
[![npm version](https://badge.fury.io/js/ya-locale.svg)](http://badge.fury.io/js/ya-locale)

## Super simple to use

A simple locale loader and producer, support `json` only.

## Installation

```
npm install ya-locale
```

## Usage

Firstly, you will be needed to create a `locale` directory including `en.json`, `zh.json` ,`jp.json`, etc.

Load your locale directory before you need using them.

```js
require("ya-locale").load("path/to/locale");

const locale = require("ya-locale");

locale("example", "zh");
// ==> 示例
```
