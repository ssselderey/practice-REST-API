require('dotenv').config()
const express = require('express')
const  sequelize = require('./db')

const  PORT = process.env.PORT || 5000
const router = require('./ruotes/index')

const models = require('./models/models')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started on port 5000'))
    } catch (e){
        console.log(e)
    }
}

start()

