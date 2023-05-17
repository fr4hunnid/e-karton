const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} =  require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const cors = require('cors')


connectDB()

const port = process.env.PORT

const app = express ()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/api/patients', require('./routes/patientRoutes'))
app.use('/api/doctors', require('./routes/doctorRoutes'))
app.use('/api/cases', require('./routes/caseRoutes'))
app.use('/api/records', require('./routes/recordRoutes'))



app.use(errorHandler)

app.listen(port,()=>console.log(`Server je pokrenut na portu ${port}`.cyan.italic))

