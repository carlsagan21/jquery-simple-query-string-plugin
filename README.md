# jquery-simple-query-string-plugin

a jquery plugin for url query string parsing

## Installation

```shell
npm install --save jquery-simple-query-string-plugin
```

## Usage

```javascript
import 'jquery-simple-query-string-plugin'
```

## Purpose

Some famous query string parsers have a little problem: They fail to parse query which includes `=`. For instance, if a query look like `your/url?key=valu==e`, and the goal is to recognize this as `key` as key, and `value==e` as value, some pre-existing packages will fail to do that, because they use regex that depends on the every locations of `=`.

Unfortuately, it was my case, and it was not possible to change parameter due to several reasons, so I changed it a little bit.

## Dependencies

This plugin have peer dependency with jquery. However, I didn't put that in `package.json`. Even though npm prevalent in everywhere nowadays, jquery still have special status in the field of front-end web development. Thus, many still use jquery in a form of `<script scr=...></script>`. If it is so, designating peer dependency is reluctant.

### License

jquery-simple-query-string-plugin is MIT licensed.
