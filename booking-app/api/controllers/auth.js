import User from "../model/User.js";
import sercutity from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const register = async (req, res, next) => {
    try {
        const salt = sercutity.genSaltSync(10);
        const passHash = sercutity.hashSync(req.body.Password, salt);
        const requestUser = new User({
            ...req.body,
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
        const token = jwt.sign({id: user._id, IsAdmin: user.IsAdmin}, process.env.JWT_KEY)
        
        const {Password, IsAdmin, ...otherInformation} = user._doc;

        res.cookie("token", token, {httpOnly: true})
        .status(200)
        .json({details: {...otherInformation}, IsAdmin});

    } catch (error) {
        return next(error);

    }
};