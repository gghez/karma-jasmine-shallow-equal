describe('Karma Jasmine Shallow Equal unit test', function () {


    it('success on scalar values', function () {
        expect(true).toShallowEqual(true);
        expect(10).toShallowEqual(10);
        expect('success').toShallowEqual('success');
    });

    it('fail on scalar values', function () {
        expect(true).not.toShallowEqual(false);
        expect(10).not.toShallowEqual(42);
        expect('success').not.toShallowEqual('fail');
    });

    it('success on empty objects', function () {
        expect({}).toShallowEqual({});
    });

    it('success on empty array', function () {
        expect([]).toShallowEqual([]);
    });

    it('success on simple objects', function () {
        expect({a: 10, b: 12}).toShallowEqual({a: 10});
    });

    it('fail on simple objects', function () {
        expect({a: 10, b: 12}).not.toShallowEqual({a: 11});
    });

    it('success on array', function () {
        expect([10, 11, 12]).toShallowEqual([10, 11]);
    });

    it('fail on array', function () {
        expect([10, 11, 12]).not.toShallowEqual([13]);
    });

    it('success on deep objects', function () {
        expect({a: {b: 12, c: 15}}).toShallowEqual({a: {b: 12}});
    });

    it('fail on deep objects', function () {
        expect({a: {b: 12, c: 15}}).not.toShallowEqual({a: {b: 13}});
    });

    it('success on deep array', function () {
        expect([{b: 12, c: 15}]).toShallowEqual([{b: 12}]);
    });

    it('fail on deep array', function () {
        expect([{b: 12, c: 15}]).not.toShallowEqual([{b: 13}]);
    });

    it('success on using object as array', function () {
        expect([{b: 12}, {c: 15}]).toShallowEqual({length: 2, 0: {b: 12}});
    });

    it('fail on using object as array', function () {
        expect([{b: 12}, {c: 15}]).not.toShallowEqual({length: 3});
    });

    it('success on accessors', function () {
        function test() {
        }

        Object.defineProperty(test.prototype, 'a', {
            get: function () {
                return 'b';
            }
        });

        expect(new test()).toShallowEqual({a: 'b'});
    });

    it('success on dates', function () {
        expect(new Date("2014-09-30T20:00:00.000Z")).toShallowEqual(new Date("2014-09-30T20:00:00.000Z"));
    });

    it('fail on dates', function () {
        expect(new Date("2014-09-30T20:00:00.000Z")).not.toShallowEqual(new Date("2014-09-29T20:00:00.000Z"));
    });

    it('fail on comparison date with non-date', function () {
        expect(42).not.toShallowEqual(new Date("2014-09-29T20:00:00.000Z"));
    });

    it('success on missing properties', function () {
        expect({a: 10}).toShallowEqual({a: 10, b: undefined});
    });

    it('success on null properties', function () {
        expect({a: 10, b: null}).toShallowEqual({a: 10, b: null});
    });

    it('fail on missing properties', function () {
        expect({a: 10, b: 12}).not.toShallowEqual({a: 10, b: undefined});
    });

    it('fail on null properties', function () {
        expect({a: 10, b: 12}).not.toShallowEqual({a: 10, b: null});
    });

    it('success on null', function () {
        expect(null).toShallowEqual(null);
    });

    it('success on undefined', function () {
        var a = {};
        expect(a.unknown).toShallowEqual(undefined);
    });

    it('fail on null', function () {
        expect(23).not.toShallowEqual(null);
    });

    it('fail on undefined', function () {
        expect(23).not.toShallowEqual(undefined);
    });

    it('fail on unexisting array', function () {
        expect(null).not.toShallowEqual(['a']);
    });

});