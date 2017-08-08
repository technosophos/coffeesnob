const assert = require('assert')
const desc = require("../src/description")

describe("description", function() {
    describe("mainFlavor", function() {
        it("has a valid flavor", function() {
            assert(desc.mainFlavor(), "a hint of pear")
        })
    })
})