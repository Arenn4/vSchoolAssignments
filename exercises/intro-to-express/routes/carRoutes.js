const express = require('express')
const carRouter = express.Router()
const Cars = require('../models/car')


//GET
carRouter.get('/', (req, res) =>{
    Cars.find((err, cars) => {
        if(err) return res.status(500).send({msg: "THE BEEEESSSS AHHH SOOO MANY BEEESSS"})
        return res.status(200).send(cars)
    })
})

//GET ONE
carRouter.get('/:id', (req, res)=>{
    Cars.findById(req.params.id, (err, foundCar) =>{
        if(err) return res.status(500).send({msg: "YOU NEVER HAD ME. YOU NEVER HAD YOUR CAR!"})
        return res.status(200).send(foundCar)
    })
})

carRouter.post('/', (req, res)=>{
    const newCar = new Cars(req.body)
    newCar.save((err, newSavedCar) =>{
        if(err) return res.status(500).send({msg: "DIS IS MY NEW HAIRCUT, I MEAN CAHRR"})
        return res.status(201).send(newSavedCar)
    })
})

carRouter.put('/:id', (req, res)=>{
    Cars.findOneAndUpdate(
        { _id: req.params.id}, //find this object by it's ID
        req.body,              //update it with the user's object in req.body
        { new: true},          //request the updated object back in the response
        (err, updatedCar) =>{
            if (err) return res.status(500).send(err)
            return res.status(201).send(updatedCar)
        })
})

carRouter.delete('/:id', (req, res)=>{
    Cars.findOneAndRemove(
        { _id: req.params.id},
        (err, deletedCar) =>{
            if (err) return res.status(500).send(err)
            return res.status(204).send({msg: 'Car successfully deleted!'})
        }
    )
})




module.exports = carRouter