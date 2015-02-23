'use strict';

var assign = require('object-assign');

module.exports = function (options) {
    options = assign({
        maxLength: 50,
        selectors: 'h1.h2.h3.h4.h5.h6.p.li.blockquote.th.td.dt.dd'.split('.')
    }, options || {});

    var selectors = document.querySelectorAll(options.selectors.join(','));
    Array.prototype.forEach.call(selectors, function (element) {
        var words = element.innerHTML.split(' ');
        var len = words.length;
        if (element.textContent.split(' ').length > 1 &&
            words[len - 2].length + words[len - 1].length < options.maxLength) {
            words[len - 2] += '&nbsp;' + words[len - 1];
            var lastWord = words.pop().replace(/.*((?:<\/\w+>)*)$/, '$1');
            element.innerHTML = words.join(' ') + lastWord;
        }
    });
};
