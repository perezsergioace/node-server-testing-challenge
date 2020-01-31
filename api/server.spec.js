const request = require('supertest');
const server = require('./server');

describe('server', function() {
    it('runs the tests', function() {
        expect(true).toBe(true);
    })

    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing')
        })
    })
})