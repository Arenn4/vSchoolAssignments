// const express = require('express')
// const bountyRouter = express.Router()
// const uuidv4 = require('uuid')


// bountyRouter.route('/')
//     .get((req, res)=>{
//         res.send(bounties)
//     })
//     .post((req, res)=>{
//         req.body.id = uuidv4()
//         bounties.push(req.body)
//         res.send(bounties)
//     })
// bountyRouter.route('/:id')
//     .get((req, res)=>{
//         console.log(req.params)
//         const findBounty = bounties.find(person => person.id === req.params.id)
//         res.send(findBounty)
//     })
//     .delete((req, res)=>{
//         const deleteBounty = bounties.findIndex(person => person.id === req.params.id)
//         bounties.splice(deleteBounty, 1)
//         res.send(bounties)
//     })
//     .put((req, res)=>{
//         // 1  Isolate the object that needs to be updated
//         const findBounty = bounties.find(person => person.id === req.params.id)
//         const findBountyIndex = bounties.findIndex(person => person.id === req.params.id)
//         console.log(findBounty)
//         console.log(req.body)
//         // 2  Update that object with the req.body object the user sent us
//         const updateBounty = Object.assign(findBounty, req.body)
//         // 3  Put that updated object back in the original array, replacing the old object
//         bounties.splice(findBountyIndex, 1, updateBounty)
        
//         res.send(bounties)
//     })

// module.exports = bountyRouter