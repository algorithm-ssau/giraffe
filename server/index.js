const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
require('dotenv').config()
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

async function start(){
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(config.get('port'), () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    }catch (e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
