import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import env from 'dotenv'
// import userRoutes from './routes/userRoutes'

const app = express()    
env.config()

app.use(cors())
app.use(express.json())
  
// app.use("/api/auth", userRoutes);

//Bioler plate to connect MongoDB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected Successfully')
}).catch((err) => {
    console.log(err.message)
})   

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, '../client/build')))
app.use('*', express.static(path.join(__dirname, '../client/build')))

app.listen(process.env.PORT,
    () => console.log(`Server Started on Port ${process.env.PORT}`))