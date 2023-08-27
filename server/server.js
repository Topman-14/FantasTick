require('dotenv').config();

const cors = require('cors');

const listItemRoutes = require('./routes/list_item');

const userRoutes = require('./routes/user');

const express = require('express');
const mongoose = require('mongoose');

//create express app
const app = express();

app.use(cors());

//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/items', listItemRoutes);
app.use('/api/user', userRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, "localhost", () => {
    console.log("Server listening on localhost:" + PORT);
});


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{})
    .catch((err)=>{
        console.log(err);
    })

   

  