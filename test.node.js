'use strict';

var fs     = require('fs'),
    widow  = require('./'),
    assert = require('assert');

var infixture = fs.readFileSync('./fixtures/in.html', 'utf-8');
var outfixture = fs.readFileSync('./fixtures/out.html', 'utf-8');

describe(require('./package.json').name + ' (using node)', function () {
    it('should add non breaking spaces to the ends of block level elements', function () {
        assert.equal(widow(infixture), outfixture);
    });
});
