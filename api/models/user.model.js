import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ // The Structure that can be saved in the database when signing up
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
},{timestamps: true})

const userModel = mongoose.model("User", userSchema);// Saved in the User in the mongo database.. It will get converted to Users when 
                                                     // multitple users are getting saved   
export default userModel;