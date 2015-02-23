'use strict';

var fs     = require('fs'),
    widow  = require('./'),
    test   = require('tape');

var infixture = fs.readFileSync('./fixtures/in.html', 'utf-8');
var outfixture = fs.readFileSync('./fixtures/out.html', 'utf-8');

test(require('./package.json').name + ' (in node)', function (t) {
    var expected = 'should add nbsps to the ends of block level elements';
    t.plan(1);
    t.equal(widow(infixture), outfixture, expected);
});
