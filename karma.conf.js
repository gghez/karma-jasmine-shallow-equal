module.exports = function (config) {
    config.set({
        basePath: './',

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-story-reporter',
            require('./src/index')
        ],

        files: [
            'test/*.js'
        ],

        frameworks: ['jasmine', 'jasmine-shallow-equal'],

        browsers: [
            'PhantomJS'
        ],

        reporters: ['story'],

        singleRun: true
    });
};