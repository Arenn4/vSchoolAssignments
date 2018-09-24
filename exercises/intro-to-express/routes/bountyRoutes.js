const express = require('express')
const bountyRouter = express.Router()
const Bounties = require('../models/bounty')

//GET
bountyRouter.get('/', (req, res) => {
    Bounties.find((err, bounties) =>{
        if(err) return res.status(500).send(err)
        return res.status(200).send(bounties)
    })
})

//GET ONE
bountyRouter.get('/:id', (req, res) => {
    Bounties.findById(req.params.id, (err, foundBounty) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(foundBounty)
    })
})

//Post New Bounty
bountyRouter.post('/', (req, res) => {
    const newBounty = new Bounties(req.body)
    newBounty.save((err, newSavedBounty) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(newSavedBounty)
    })
})

//Update Bounty
bountyRouter.put('/:id', (req, res) => {
    Bounties.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true },
        (err, updatedBounty) =>{
            if(err) return res.status(500).send(err)
            return res.status(201).send("cool")
        }
    )
})

bountyRouter.delete('/:id', (req, res) => {
    Bounties.findOneAndRemove(
        { _id: req.params.id },
        (err, deletedCar) => {
            if(err) return res.status(500).send(err)
            return res.status(204).send({msg: 'Bounty successfully deleted'})
        }
    )
})


module.exports = bountyRouter