import User from "../model/User.js";
import sercutity from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const register = async (req, res, next) => {
    try {
        const salt = sercutity.genSaltSync(10);
        const passHash = sercutity.hashSync(req.body.Password, salt);
        const requestUser = new User({
            Lastname: req.body.Lastname,  
            Firstname: req.body.Firstname, 
            Email: req.body.Email, 
            Role: "Customer",
            Username: req.body.Username, 
            Password: passHash
        });
        const saveUser = await requestUser.save();
        res.status(200).json(saveUser); 
    } catch (error) {
        next(error);
    }

};
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({Username: req.body.Username});
        if (!user) return next(createError(404, "User not exist"));
        const password = await sercutity.compare(
             req.body.Password,
             user.Password
             );
        if (!password) return next(createError(404, "Wrong password or username"));
        const token = jwt.sign({id: user._id, Role: user.Role}, process.env.JWT_KEY)
        const {Password, Role, ...otherInformation} = user._doc;

        res.cookie("token", token, {httpOnly: true})
        .status(200)
        .json({...otherInformation});

    } catch (error) {
        return next(error);

    }
};