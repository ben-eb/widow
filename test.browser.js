'use strict';

var fs    = require('fs');
var test  = require('tape');
var widow = require('./');

var infixture  = fs.readFileSync('./fixtures/in.html', 'utf-8');
var outfixture = fs.readFileSync('./fixtures/out.html', 'utf-8');

test(require('./package.json').name + ' (in browser)', function(t) {
    t.plan(2);
    var testContainer = document.createElement('div');
    testContainer.innerHTML = infixture;
    document.body.appendChild(testContainer);
    t.notEqual(testContainer.innerHTML, outfixture, 'should not have run yet');
    widow();
    t.equal(testContainer.innerHTML, outfixture, 'should have run');
});
