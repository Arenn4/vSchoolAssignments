const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const uuidv4 = require('uuid/v4')
const bountyRouter = require('./bountyRouter');
const mongoose = require('mongoose');



//middleware
app.use(bodyParser.json())

// MONGODB CONNECT
mongoose.connect(`mongodb://localhost:27017/intro-db`, { useNewUrlParser: true }, )
    .then(()=> console.log('connected to MongoDB'))
    .catch(err => console.error(err));


app.use('/bounties', bountyRouter)

//Routes
app.use('/test', require('./routes/bountyRoutes'))

//Listen
app.listen(4100, () =>{
    console.log('Hello There')
})