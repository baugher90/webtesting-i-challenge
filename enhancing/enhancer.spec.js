const { succeed, fail, repair, get } = require("./enhancer.js");

// test away!

describe("enhancing.js", () => {
  //============================================ succeed Tests

  describe("succeed()", () => {
    it("should return item enhancement increases by 1", () => {
      const item = {
        name: "Ethan",
        durability: 85,
        enhancement: 15
      };
      const expected = {
        name: "Ethan",
        durability: 85,
        enhancement: 16
      };
      const repairSucceeded = succeed(item);
      expect(repairSucceeded).toEqual(expected);
    });

    it("should return unchanged if item enhancement level is 20", () => {
      const item = {
        name: "Ethan",
        durability: 85,
        enhancement: 20
      };
      const expected = {
        name: "Ethan",
        durability: 85,
        enhancement: 20
      };
      const repairSucceeded = succeed(item);
      expect(repairSucceeded).toEqual(expected);
    });

    it("should return unchanged durability of the item", () => {
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
    });
  });

  //============================================ fail Tests

  describe("fail()", () => {
    it("should lower durability of the item by 5 if enhancement is less than 15", () => {
        const item = {
            name: "Ethan",
            durability: 85,
            enhancement: 14
          };
          const expected = {
            name: "Ethan",
            durability: 80,
            enhancement: 14
          };
          const failItem = fail(item);
          expect(failItem).toEqual(expected);
    });

    it("should decrease the durability of the item by 10, if enhancment is 15 or more", () => {
        const item = {
            name: "Ethan",
            durability: 85,
            enhancement: 15
          };
          const expected = {
            name: "Ethan",
            durability: 75,
            enhancement: 15
          };
          const failItem = fail(item);
          expect(failItem).toEqual(expected);
    });

    it("should decrease the enhancement level by 1 if enhancment level is greater than 16", () => {
        const item = {
            name: "Ethan",
            durability: 85,
            enhancement: 16
          };
          const expected = {
            name: "Ethan",
            durability: 75,
            enhancement: 15
          };
          const failItem = fail(item);
          expect(failItem).toEqual(expected);
    });
  });

  //============================================ repair Tests

  describe("repair()", () => {
    it("should restore durability to 100", () => {
      const item = {
        name: "Ethan",
        durability: 85,
        enhancement: 15
      };
      const expected = {
        name: "Ethan",
        durability: 100,
        enhancement: 15
      };
      const repairedItem = repair(item);
      expect(repairedItem).toEqual(expected);
    });
    xit("should return null with no arguments", () => {});
    xit("should return when not passed a valid argument", () => {});
  });

  //============================================ get Tests

  describe('get()', () => {
      xit('', () => {})
  })
});
