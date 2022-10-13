import Room from "../model/Room.js";

//CREATE
export const createRoom = async(req, res, next) => {
    const requestRoom = new Room(req.body);
    try {
        const saveRoom = await requestRoom.save();
        res.status(200).json(saveRoom); 
    } catch (error) {
        next(error);
    }
};

//READ
export const getRoom = async(req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room); 
    } catch (error) {
        next(error);
    }
};

export const getRoomAll = async(req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms); 
    } catch (error) {
        next(error);
    }
};


//UPDATE
export const updateRoom = async(req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateRoom); 
    } catch (error) {
        next(error);
    }
};


//DELETE
export const deleteRoom = async(req, res, next) => {
    try {
        const deleteRoom = await Room.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete has been!"); 
    } catch (error) {
        next(error);
    }
};