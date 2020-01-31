const Users = require('./usersModel');
const db = require('../data/dbconfig');

describe('users model', function() {
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('insert(', function() {
        beforeEach(async () => {
            await db('users').truncate();
        })

        it('should add the new user to the db', async function() {
            await Users.insert({ name: 'Leidy' });
            await Users.insert({ name: 'Maritza' });

            const users = await db('users');
            expect(users).toHaveLength(2);
        })
    })

    describe('remove', function() {
        beforeEach(async () => {
            await db('users').truncate();
        })

        it('should remove the newly added user from the database', async function() {
            await Users.insert({ name: 'new user'});
            await Users.remove({})
            const removed = await db('users')

            expect(removed).toHaveLength(0);
        })
    })
})