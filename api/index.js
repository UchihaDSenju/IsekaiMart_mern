import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // npm i dotenv
import testRouter from './routes/test.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to Mongo Database"))
    .catch((err) => console.error(err))

const app = express();

app.listen(3000, () => {
    console.log("Working fine!!")
});

app.use(express.json()) // By default server soesnot take json as input but using this function allows it to do so

// app.get('/api/function/test', (req, res) => {
//     res.send("test Server Working");
// });
// Using the above will cause us to use many lines when we are doing the same for many functions
// So we split it into index -> routes -> controllers whenever we navigate to that particular server
app.use('/api/function', testRouter)
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success: fail,
        statusCode,
        message
    })
})// This is a middleware that we have defined so wherever we call next(error) this error handling runs