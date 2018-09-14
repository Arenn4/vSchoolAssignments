const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const sockStore = [{
    type: 'plain',
    cost: '200'
},
{
    type: 'polka-dot',
    cost: 1000
}
]

//MIDDLEWARE
app.use(bodyParser.json())





//BELOW ARE THE ROUTES
//GET ROUTE
app.get('/', (req, res) =>{
    res.send('Some words')//what do we want to send to the client,  inside the function
})

//POST REQUEST
app.post('/socks', (req, res)=>{
    sockStore.push(req.body)
    res.send(sockStore)
    //saves the users request object into the database
    //returns whatever the api is design to return to POST
})

//PUT REQUEST
app.put('/socks/:id', (req, res)=>{

})

//DELETE Request
app.delete('/socks/:id', (req, res)=>{

})

//SERVER SETUP & PORT, LISTEN
app.listen(4000, () => {
    console.log('yo your server is running on port 4000')
})


