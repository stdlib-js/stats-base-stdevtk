/*
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

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import { NumericArray } from '@stdlib/types/array';

/**
* Interface describing `stdevtk`.
*/
interface Routine {
	/**
	* Computes the standard deviation of a strided array using a one-pass textbook algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = stdevtk( x.length, 1, x, 1 );
	* // returns ~2.0817
	*/
	( N: number, correction: number, x: NumericArray, stride: number ): number;

	/**
	* Computes the standard deviation of a strided array using a one-pass textbook algorithm and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns standard deviation
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = stdevtk.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	ndarray( N: number, correction: number, x: NumericArray, stride: number, offset: number ): number; // tslint:disable-line:max-line-length
}

/**
* Computes the standard deviation of a strided array using a one-pass textbook algorithm.
*
* @param N - number of indexed elements
* @param correction - degrees of freedom adjustment
* @param x - input array
* @param stride - stride length
* @returns standard deviation
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = stdevtk( x.length, 1, x, 1 );
* // returns ~2.0817
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = stdevtk.ndarray( x.length, 1, x, 1, 0 );
* // returns ~2.0817
*/
declare var stdevtk: Routine;


// EXPORTS //

export = stdevtk;
