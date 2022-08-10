const express = require('express')
const app = express();
const env = require('dotenv');
const { testRoute } = require('./routes/test/testRoute');
env.config();


app.use('/test',testRoute)



let port = process.env.PORT;
app.listen(port,()=>{
    console.log('listening on port',port)
});