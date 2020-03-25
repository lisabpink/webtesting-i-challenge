const enhancer = require("./enhancer.js");
// test away!
it("should run test true", function() {
    expect(true).toBe(true);
  });
  
  describe("enhacer.js", function() {
    describe("repair()", function() {
      it("should return item durability as 100", function() {
        let item = {};
        const fixed = enhancer.repair(item);
        expect(fixed.durability).toBe(100);
      });
    });
});

describe("success()", function() {
    it("should enhance item if lvl is not 20 succeed", function() {
      let item = {};
      item.enhancement = 0;
      const enhanced = enhancer.succeed(item);
      expect(enhanced.enhancement).toBe(1);
    });
    it("should not enhance item if lvl is 20 succeed", function() {
      let item2 = {};
      item2.enhancement = 20;
      expect(() => {
        enhancer.succeed(item2);
      }).toThrow();
    });
  });
