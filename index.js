import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileupload from 'express-fileupload'

const PORT = 8000
const DB_URL = '' // ссылка для соединения в бд

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileupload({}))

// routes
app.use('/api', router)
// app.use('/users', userRouter)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (error) {
        console.log(error)
    }
}

startApp()