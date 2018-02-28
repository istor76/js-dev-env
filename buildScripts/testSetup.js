// This file isn't traspiled, so must use CommonJS and ES5

// Redister babel to transpile before out test run.
require('babel-register')();

//Disable webpack features that Mocha doesn't undersatand.
require.extensions['.css'] = function(){};
