import Room from "../model/Room.js";
import RealEstate from "../model/RealEstate.js";

//CREATE
export const createRoom = async(req, res, next) => {
    const realestateId = req.params.realestateid;
    const requestRoom = new Room(req.body);
    try {
        const saveRoom = await requestRoom.save();
        try {
            await RealEstate.findByIdAndUpdate(realestateId, {$push: {Rooms: saveRoom._id}});
        } catch(error) {
            next(error);
        }
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

export const updateRoomAvailability = async(req, res, next) => {
    try {
        await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
              $push: {
                "RoomNumbers.$.unavailableDates": req.body.dates
              },
            }
          );
        res.status(200).json("Update status is success"); 
    } catch (error) {
        next(error);
    }
};

//DELETE
export const deleteRoom = async(req, res, next) => {
    const realestateId = req.params.realestateid;
    try {
        const deleteRoom = await Room.findByIdAndDelete(req.params.id);
        try {
            await RealEstate.findByIdAndUpdate(realestateId, { $pull: { Rooms: req.params.id },});
        } catch(error) {
            next(error);
        }
        res.status(200).json("Delete has been!"); 
    } catch (error) {
        next(error);
    }
};