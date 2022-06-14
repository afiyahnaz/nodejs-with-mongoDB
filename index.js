const express = require('express');
const mongoose = require('mongoose');


const homeRouter = require('./routes/homeRouter');
const productsRouter = require('./routes/productsRouter');
const config = require('./config/index');




const app = express();


const PORT = 3000;
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
    });

    mongoose.connect(config.dbConstr,  (err,result)=>{
       if(!err)  console.log('connected to db');
       else console.log('db error');
    })

    const NewSchema =new mongoose.Schema({
      name:String,
      age:Number
    })

    const newModel = new mongoose.model('collections',NewSchema);

    const data = new newModel({name:'naz',age:30});
    data.save();


    app.use('/',homeRouter);
    app.use('/api/products',productsRouter);