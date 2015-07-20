(function () {

    //Michel Salib's implementation for `chai` (https://github.com/michelsalib/chai-shallow-deep-equal/)
    function shallowDeepEqual(expect, actual, path) {
        // null value
        if (expect === null) {
            if (!(actual === null)) {
                throw 'Expected "' + actual + '" to be null at path "' + path + '".';
            }

            return true;
        }

        // undefined value
        if (typeof expect == 'undefined') {
            if (!(typeof actual == 'undefined')) {
                throw 'Expected "' + actual + '" to be undefined at path "' + path + '".';
            }

            return true;
        }

        // scalar description
        if (/boolean|number|string/.test(typeof expect)) {
            if (expect != actual) {
                throw 'Expected "' + actual + '" to equal "' + expect + '" at path "' + path + '".';
            }

            return true;
        }

        // dates
        if (expect instanceof Date) {
            if (actual instanceof Date) {
                if (expect.getTime() != actual.getTime()) {
                    throw (
                    'Expected "' + actual.toISOString() + '" to equal ' +
                    '"' + expect.toISOString() + '" at path "' + path + '".'
                    );
                }

            } else {
                throw (
                'Expected "' + actual + '" to equal ' +
                '"' + expect.toISOString() + '" at path "' + path + '".'
                );
            }
        }

        if (actual === null) {
            throw 'Expected null to be an array/object at path "' + path + '".';
        }

        // array/object description
        for (var prop in expect) {
            shallowDeepEqual(expect[prop], actual[prop], path + '/' + prop);
        }

        return true;
    }

    beforeEach(function () {

        jasmine.addMatchers({
            toShallowEqual: function (util, customEqualityTesters) {
                return {
                    compare: function (actual, expected) {
                        var passed, errorMessage;

                        try {
                            passed = shallowDeepEqual(expected, actual, '.');
                        }
                        catch (err) {
                            errorMessage = err.message;
                        }
                        return {
                            pass: passed,
                            message: errorMessage || 'Expected ' + actual + ' to partially equal ' + expected
                        };
                    }
                };
            }
        });
    });
})();
