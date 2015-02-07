var path = require('path');

var createPattern = function (file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var initAdapter = function (files) {
    files.push(createPattern(__dirname + '/jasmine-shallow-equal.js'));
};

initAdapter.$inject = ['config.files'];

module.exports = {
    'framework:jasmine-shallow-equal': ['factory', initAdapter]
};