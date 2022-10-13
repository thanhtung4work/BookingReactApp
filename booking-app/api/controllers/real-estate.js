import RealEstate from "../model/RealEstate.js";

// CREATE
export const createRealEstate = async(req, res, next) => {
    const requestRealEstate = new RealEstate(req.body);
    try {
        
        const saveRealEstate = await requestRealEstate.save();
        res.status(200).json(saveRealEstate); 
    } catch (error) {
    next(error);
    }
};

// READ
export const getRealEstate = async(req, res, next) => {
    try {
        const realestate = await RealEstate.findById(req.params.id);
        res.status(200).json(realestate); 
    } catch (error) {
        next(error);
    }
};

export const getRealEstateAll = async(req, res, next) => {
    try {
        const realestates = await RealEstate.find();
        res.status(200).json(realestates); 
    } catch (error) {
        next(error);
    }
};

//UPDATE
export const updateRealEstate = async(req, res, next) => {
    try {
        const updateRealEstate = await RealEstate.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateRealEstate); 
    } catch (error) {
        next(error);
    }
};


//DELETE
export const deleteRealEstate = async(req, res, next) => {
    try {
        const deleteRealEstate = await RealEstate.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete has been!"); 
    } catch (error) {
        next(error);
    }
};