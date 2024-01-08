import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/errorHAndler.js";

export const signup = async (req, res, next) => {
    console.log(req.body);// Shows the json file from postman in the console
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new userModel({username, email, password: hashedPassword});
    try {
        await newUser.save();
        res.status(201).json("User created Successfully");
    } catch (error) {
        next(error)
    }
}