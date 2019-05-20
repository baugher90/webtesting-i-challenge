const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!

describe('enhancing.js', () => {
//============================================ succeed Tests 

    // describe('succeed()', () => {
    //     it('', () => {})
    // })

//============================================ fail Tests

    // describe('fail()', () => {
    //     it('', () => {})
    // })

//============================================ repair Tests

    describe('repair()', () => {
        it('should restore durability to 100', () => {
            const item = {
                name: "strider",
                durability: 85,
                enhancement: 15
              };
        
              // arrange
              const expected = {
                name: "strider",
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