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