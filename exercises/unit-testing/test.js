var chai = require('chai')
var myFunctions = require('./app.js')
var assert = chai.assert
var addS = myFunctions.addS

// DESCRIBE, IT//
// assert.equal (actual, expected)  //Great for strings and numbers and booleans
// assert.deepEqual (actual, expected)// more so used for an array



describe("Create a function that adds an 's' to the end of every word in an array", function(){
    it("should end with an s", function(){
        assert.deepEqual(addS(['dog', 'cat', 'aligator']), ['dogs', 'cats', 'aligators'])
    })
    it('should not accept numbers into the array', function(){
        assert.equal(addS(['dogs', 0, 3]), 'no numbers')
    })
    it("should not add an 's' if the word ends with an 's' already", function(){
        assert.deepEqual(addS(['dogs', 'cats', 'wolves']), ['dogs', 'cats', 'wolves'])
    })
})