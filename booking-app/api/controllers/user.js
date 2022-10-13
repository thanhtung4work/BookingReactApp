import User from "../model/User.js";

//CREATE
export const createUser = async(req, res, next) => {
    const requestUser = new User(req.body);
    try {
        
        const saveUser = await requestUser.save();
        res.status(200).json(saveUser); 
    } catch (error) {
        next(error);
    }
};

//READ
export const getUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user); 
    } catch (error) {
        next(error);
    }
};

export const getUserAll = async(req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users); 
    } catch (error) {
        next(error);
    }
};

//UPDATE
export const updateUser = async(req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateUser); 
    } catch (error) {
        next(error);
    }
};
//DELETE
export const deleteUser = async(req, res, next) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete has been!"); 
    } catch (error) {
        next(error);
    }
};