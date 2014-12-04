// *********************************************************************************************************************
// IF YOU WANT TO CUSTOMIZE ANYTHING HERE, COPY THIS FILE TO YOUR /test DIRECTORY AND RTD WILL USE THAT FILE INSTEAD
// *********************************************************************************************************************

module.exports = {
    // RTD reduces the noise by swallowing most outputs. Here you can control this
    output: {
        debug: false,           // enables all outputs. This is also switched on if you run grunt --debug
        appOutput: false,       // this shows the output from the 'meteor run' command
        mirrorOutput: false,    // this shows the output from the 'meteor run' command on the mirror app
        karma: false            // shows Karma's output
    },
    options: {
        useCucumberJs: false, // EXPERIMENTAL FEATURE: DISABLES THE RUNNING OF SPEC FILES AND CODE COVERAGE FOR NOW
        cucumberjs: { // See here for more details: https://github.com/s9tpepper/grunt-cucumber-js
            src: '<%= basePath %>/test/features',
            options: {
                steps: "<%= basePath %>/test/features/step_definitions",
                format: 'pretty'
            }
        },
        runTestsOnStart: true,
        coverage: {
            // Coverage checks run after all unit and acceptance tests run. You can disable here or set the thresholds
            enabled: true,
            includeUnitCoverage: true,
            thresholds: {
                'statements': 100,
                'branches': 100,
                'functions': 100,
                'lines': 100
            },
            exclude: '**/do_not_cover/**'
        },
        jshint: {
            enabled: true,
            // if you want to customize jslint options for app and/or test code, you can do that here
            appOptions: {},
            testOptions: {}
        },
	    coffeelint: {
		    enabled: true,
		    // if you want to customize coffeelint options for app and/or test code, you can do that here
			appOptions: {},
	        testOptions: {}
	    },
        // if you have client libraries, you'll want to exclude them from test coverage
        instrumentationExcludes: ['**/packages/**', '**/3rd/**', 'fixture.js', 'fixture.coffee'],
        // If your dev environment has a stand-alone mongo service, you should disabled this
        killMongo: false
    },
    selenium: {
        // You can set specific versions of selenium-server / chromedriver to use here
        darwin: {
            chromeDriverName: 'chromedriver',
            chromeDriverOs: 'mac32',
            chromeDriverVersion: '2.12',
            chromeDriverSha: '8240b784feeffd02cfc303ed50886d402dd654a6'
        },
        linux: {
            chromeDriverName: 'chromedriver',
            chromeDriverOs: 'linux64',
            chromeDriverVersion: '2.12',
            chromeDriverSha: 'f366e35011637d6d613bfbb6abcfdffcd2f6c517'
        },
        seleniumServeVersion: '2.44.0',
        seleniumServeSha: 'deb2a8d4f6b5da90fd38d1915459ced2e53eb201'
    }
};
