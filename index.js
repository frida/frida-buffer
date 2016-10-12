/*
 * Short-circuit auto-detection in the “buffer” module to avoid a Duktape
 * compatibility issue with __proto__.
 */
global.TYPED_ARRAY_SUPPORT = true;

require('buffer');
