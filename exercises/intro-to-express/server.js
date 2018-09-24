const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const uuidv4 = require('uuid/v4')
// const bountyRouter = require('./bountyRouter');
const mongoose = require('mongoose');
const morgan = require('morgan')
const bountyRoutes = require('./routes/bountyRoutes')



//middleware
// app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('dev'))

// MONGODB CONNECT
mongoose.connect(`mongodb://localhost:27017/intro-db`, { useNewUrlParser: true }, )
    .then(()=> console.log('connected to MongoDB'))
    .catch(err => console.error(err));


// app.use('/bounties', bountyRouter)

//Routes
app.use('/bounties', bountyRoutes)

//Listen
app.listen(4100, () =>{
    console.log('Hello There')
})