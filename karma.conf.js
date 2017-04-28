//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: './',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/*.js',
            'app/components/**/*.js',
            'app/shared/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
