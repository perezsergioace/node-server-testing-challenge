const Users = require("./users-model")
const db = require("../data/dbConfig")

describe("Users model", function(){
    beforeEach(async () => {
        await db("users").truncate();
    });

    describe("insert()", function() {
        it("should add users to the database", async function(){
            await Users.insert({name: "Luis" })
            await Users.insert({name: "Leo"})
    
            const users = await db("users");
            expect(users).toHaveLength(2)
        })
        
    })

    describe('remove()', function(){
        it('should remove a user from the database', async function(){
            await Users.remove({});
            const removed = await db('users');

            expect(removed).toHaveLength(0);
        })
    })
})