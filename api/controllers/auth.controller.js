import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/errorHAndler.js";
import jwt from "jsonwebtoken";
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

export const signin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const validUser = await userModel.findOne({email});
        if(!validUser){
            next(errorHandler(404, 'User not found'))
        }
        const isValidPassword = bcryptjs.compareSync(password, validUser.password);
        if(!isValidPassword){
            next(errorHandler(401, 'Wrong credentials'));
        }
        const token = jwt.sign({id: validUser._id}, "bh145672hsftwj458982jy", {expiresIn: '10h'}); // jwt.sign({payload in string}, key to hash the payload)
        const {password: pass, ...rest} = validUser._doc;// stores the data in the ...rest but removes the password field
        res.cookie('access_token', token, {httpOnly: true}) // Flags the cookie to be accessible only by the web server
        .status(200)
        .json(rest) 
    } catch (error) {
        next(error);
    }
};