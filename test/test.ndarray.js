/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var sqrt = require( '@stdlib/math-base-special-sqrt' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var stdevtk = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stdevtk, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( stdevtk.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the population standard deviation of a strided array', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = stdevtk( x.length, 0, x, 1, 0 );
	t.strictEqual( v, sqrt( 53.5/x.length ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = stdevtk( x.length, 0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = stdevtk( x.length, 0, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the population standard deviation of a strided array (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = stdevtk( x.length, 0, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, sqrt( 53.5/x.length ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = stdevtk( x.length, 0, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = stdevtk( x.length, 0, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample standard deviation of a strided array', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = stdevtk( x.length, 1, x, 1, 0 );
	t.strictEqual( v, sqrt( 53.5/(x.length-1) ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = stdevtk( x.length, 1, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = stdevtk( x.length, 1, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample standard deviation of a strided array (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = stdevtk( x.length, 1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, sqrt( 53.5/(x.length-1) ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = stdevtk( x.length, 1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = stdevtk( x.length, 1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = stdevtk( 0, 1, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = stdevtk( -1, 1, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = stdevtk( 0, 1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = stdevtk( -1, 1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns a population standard deviation of `0`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = stdevtk( 1, 0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns a population standard deviation of `0` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = stdevtk( 1, 0, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding `N-correction` less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = stdevtk( x.length, x.length, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = stdevtk( x.length, x.length+1, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding `N-correction` less than or equal to `0`, the function returns `NaN` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = stdevtk( x.length, x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = stdevtk( x.length, x.length+1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];

	v = stdevtk( 4, 1, x, 2, 0 );

	t.strictEqual( v, 2.5, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];

	v = stdevtk( 4, 1, toAccessorArray( x ), 2, 0 );

	t.strictEqual( v, 2.5, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];

	v = stdevtk( 4, 1, x, -2, 6 );

	t.strictEqual( v, 2.5, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];

	v = stdevtk( 4, 1, toAccessorArray( x ), -2, 6 );

	t.strictEqual( v, 2.5, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns `0`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = stdevtk( x.length, 1, x, 0, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns `0` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = stdevtk( x.length, 1, toAccessorArray( x ), 0, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', function test( t ) {
	var x;
	var v;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	];

	v = stdevtk( 4, 1, x, 2, 1 );
	t.strictEqual( v, 2.5, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	];

	v = stdevtk( 4, 1, toAccessorArray( x ), 2, 1 );
	t.strictEqual( v, 2.5, 'returns expected value' );

	t.end();
});
