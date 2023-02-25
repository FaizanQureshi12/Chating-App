import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import env from 'dotenv'

const app = express()
env.config()

app.use(cors())
app.use(express.json())

//Bioler plate to connect MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected Successfully')
}).catch((err) => {
    console.log(err.message)
})

app.listen(process.env.PORT,
    () => console.log(`Server Started on Port ${process.env.PORT}`))