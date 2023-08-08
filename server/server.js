require('dotenv').config();

const listItemRoutes = require('./routes/list_item');

const express = require('express');
const mongoose = require('mongoose');

//create express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/items', listItemRoutes);


//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log("Hello you're connected to the db ",process.env.PORT);
})


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{})
    .catch((err)=>{
        console.log(err);
    })


  