const express = require('express')
const fruitRouter = express.Router()
const uuid = require('uuid')

const fruits = [
    {
        type: 'strawberry',
        id: 1
    },{
        type: 'apple',
        id: 2
    }
]

fruitRouter.route('/') 
    .get((req, res) => {
        res.send(fruits)
    })
    .post((req, res) => {
        const newFruit = req.body;
        newFruit.id = uuid()
        fruits.push(newFruit)
        res.send(fruits)
    })

fruitRouter.route('/:id') 
    .get((req, res) => {
        const findFruit = fruits.find( fruit => fruit.id === req.params.id)
        res.send(findFruit)
        // res.send(`request to specific fruit with id ${req.params.id}`)
    })
    .put((req, res) => {
        // 1  Isolate the object that needs to be updated
        const findFruits = fruits.find(person => person.id === req.params.id)
        const findFruitsIndex = fruits.findIndex(person => person.id === req.params.id)
        // 2  Update that object with the req.body object the user sent us
        const updateFruits = Object.assign(findFruits, req.body)
        // 3  Put that updated object back in the original array, replacing the old object
        bounties.splice(findFruitsIndex, 1, updateFruits)
        res.send(fruits)
        // res.send(fruits)
    })
    .delete((req, res) => {
        const deleteFruits = fruits.findIndex(person => person.id === req.params.id)
        fruits.splice(deleteFruits, 1)
        res.send(fruits)
        // res.send('delete request')
    })

module.exports = fruitRouter