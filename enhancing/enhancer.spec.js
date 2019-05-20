const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!

describe('enhancing.js', () => {
//============================================ succeed Tests 

    describe('succeed()', () => {
        it('should return item enhancement increases by 1', () => {
            const item = {
                name: "Ethan",
                durability: 85,
                enhancement: 15
              };
        
              // arrange
              const expected = {
                name: "Ethan",
                durability: 85,
                enhancement: 16
              };
        
              // act
              const repairSucceeded = succeed(item);
        
              // assert
              expect(repairSucceeded).toEqual(expected);
        })

        it('should return unchanged if item enhancement level is 20', () => {
            const item = {
                name: "Ethan",
                durability: 85,
                enhancement: 20
              };
        
              // arrange
              const expected = {
                name: "Ethan",
                durability: 85,
                enhancement: 20
              };
        
              // act
              const repairSucceeded = succeed(item);
        
              // assert
              expect(repairSucceeded).toEqual(expected);
        })

        xit('should return unchanged durability of the item', () => {})
    })

//============================================ fail Tests

    describe('fail()', () => {
        xit('should lower durability of the item by 5 if enhancement is less than 15, ', () => {})

        xit('should decrease the durability of the item by 10, if enhancment is 15 or more', () => {})

        xit('should decrease the enhancement level by 1 if enhancment level is greater than 16', () => {})
    })

//============================================ repair Tests

    describe('repair()', () => {
        it('should restore durability to 100', () => {
            const item = {
                name: "Ethan",
                durability: 85,
                enhancement: 15
              };
        
              // arrange
              const expected = {
                name: "Ethan",
                durability: 100,
                enhancement: 15
              };
        
              // act
              const repairedItem = repair(item);
        
              // assert
              expect(repairedItem).toEqual(expected);
        })
        it.todo('should return null with no arguments')
        it.todo('should return when not passed a valid argument')
    })

//============================================ get Tests

    // describe('get()', () => {
    //     it('', () => {})
    // })

})