const express = require('express')
const veggieRouter = express.Router()
const uuidv4 = require('uuidv4')

const veggies = [
    {
        type: 'spinach',
        id: 1
    },{
        type: 'carrot',
        id: 2
    }
]

veggieRouter.route('/')
    .get('/', (req, res) => {
        res.send(veggies)
    })
    .post((req, res)=>{
        const newVeggie = req.body;
        newVeggie.id = uuid()
        veggies.push(newVeggie)
        res.send(veggies)
    })

    veggieRouter.route('/:id') 
    .get((req, res) => {
        res.send(`request to specific fruit with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send('put request')
    })
    .delete((req, res) => {
        res.send('delete request')
    })

module.exports = veggieRouter