'use strict';

var cheerio = require('cheerio'),
    assign  = require('object-assign');

module.exports = function (html, options) {
    options = assign({
        maxLength: 50,
        selectors: 'h1.h2.h3.h4.h5.h6.p.li.blockquote.th.td.dt.dd'.split('.')
    }, options || {});

    var $ = cheerio.load(html, { decodeEntities: false });

    $(options.selectors.join(',')).each(function () {
        var words = $(this).html().split(' ');
        var len = words.length;
        if ($(this).text().split(' ').length > 1 &&
            words[len - 2].length + words[len - 1].length < options.maxLength) {
            words[len - 2] += '&nbsp;' + words[len - 1];
            var lastWord = words.pop().replace(/.*((?:<\/\w+>)*)$/, '$1');
            $(this).html(words.join(' ') + lastWord);
        }
    });

    return $.html();
};
