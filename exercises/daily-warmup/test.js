var chai = require('chai')
var myData = require('./multarraymethod.js')
var people = myData.people
var olderThan18 = myData.olderThan18
var assert = chai.assert
var over18 = myData.over18

describe("Create a function that returns an array of people older thank 18", function(){
    it("returns an array of only the people older than 18", function(){
        assert.deepEqual(olderThan18(people), over18)
    })
})