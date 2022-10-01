<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# inheritedKeys

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's inherited enumerable property names.



<section class="usage">

## Usage

To use in Observable,

```javascript
inheritedKeys = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-keys@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var inheritedKeys = require( 'path/to/vendor/umd/utils-inherited-keys/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-keys@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.inheritedKeys;
})();
</script>
```

#### inheritedKeys( obj\[, level] )

Returns an `array` of an object's inherited enumerable property names.

```javascript
function Foo() {
    this.a = 'b';
    return this;
}

Foo.prototype.beep = 'boop';

var f = new Foo();
var keys = inheritedKeys( f );
// returns [ 'beep' ]
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var inherit = require( '@stdlib/utils-inherit' );

function Bar() {
    return this;
}

Bar.prototype.boop = 'beep';

function Foo() {
    Bar.call( this );
    this.a = 'b';
    return this;
}

inherit( Foo, Bar );
Foo.prototype.beep = 'boop';

var f = new Foo();
var keys = inheritedKeys( f, 1 );
// returns [ 'beep' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Name order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherited-keys@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'qux'
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bop'
});

var obj = new Foo();
var keys = inheritedKeys( obj );

console.log( keys );
// => [ 'foo' ]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/keys`][@stdlib/utils/keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/keys-in`][@stdlib/utils/keys-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-names`][@stdlib/utils/inherited-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-symbols`][@stdlib/utils/inherited-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inherited-keys.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inherited-keys

[test-image]: https://github.com/stdlib-js/utils-inherited-keys/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-inherited-keys/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inherited-keys/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inherited-keys?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inherited-keys.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inherited-keys/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inherited-keys/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-inherited-keys/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-inherited-keys/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-inherited-keys/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inherited-keys/main/LICENSE

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/keys]: https://github.com/stdlib-js/utils-keys/tree/umd

[@stdlib/utils/keys-in]: https://github.com/stdlib-js/utils-keys-in/tree/umd

[@stdlib/utils/inherited-property-names]: https://github.com/stdlib-js/utils-inherited-property-names/tree/umd

[@stdlib/utils/inherited-property-symbols]: https://github.com/stdlib-js/utils-inherited-property-symbols/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
