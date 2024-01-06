import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // npm i dotenv
import testRouter from './routes/test.route.js';
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to Mongo Database"))
    .catch((err) => console.error(err))

const app = express();

app.listen(3000, () => {
    console.log("Working fine!!")
});

// app.get('/api/function/test', (req, res) => {
//     res.send("test Server Working");
// });
// Using the above will cause us to use many lines when we are doing the same for many functions
// So we split it into index -> routes -> controllers whenever we navigate to that particular server
app.use('/api/function', testRouter)