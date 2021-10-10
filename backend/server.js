
require('dotenv').config()
require('express-async-errors')
const express = require('express')
const cors = require('cors')

const app = express()

// db
const connectDB = require('./db/connection')

// routes
const bookRouter = require('./routes/book')
const supplierRouter = require('./routes/supplier')

// env variables
const PORT = process.env.PORT

//middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('hello')
})

app.use('/api/v1/books', bookRouter)
app.use('/api/v1/suppliers', supplierRouter)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()