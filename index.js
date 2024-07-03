import express from 'express'
import mongoose from 'mongoose'
import fileupload from 'express-fileupload'
import router from './router.js'
import 'dotenv/config'

const PORT = process.env.PORT || 8000
const DB_URL = process.env.DB_URL

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileupload({}))
app.use('/api', router)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT)
    }
    catch (error) {
        throw new Error(error.message)
    }
}

startApp()
    .then(() => console.log(`Server started on port ${PORT}`))
    .catch(error => console.log(error))