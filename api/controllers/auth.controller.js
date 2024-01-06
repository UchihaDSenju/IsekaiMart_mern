import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    console.log(req.body);// Shows the json file from postman in the console
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new userModel({username, email, password: hashedPassword});
    await newUser.save();
    try {
        res.status(201).json("User created Successfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}