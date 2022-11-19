import RealEstate from "../model/RealEstate.js";
import Room from "../model/Room.js";

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

export const getRealEstates = async(req, res, next) => {
    const { min, max, ...others } = req.query;
  try {
    const realestates = await RealEstate.find({
      ...others,
      CheapestPrice: { $gt: min | 1, $lt: max || 999999999 },
    }).limit(req.query.limit);
    res.status(200).json(realestates);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return RealEstate.countDocuments({ City: city });
        })
      );
      res.status(200).json(list);
    } catch (error) {
      next(error);
    }
  };
  export const countByType = async (req, res, next) => {
    try {
    
        const hotelType = await RealEstate.countDocuments({Type: "hotel"});
        const apartmentType = await RealEstate.countDocuments({Type: "apartment"});
        const resortType = await RealEstate.countDocuments({Type: "resort"});
        const villaType = await RealEstate.countDocuments({Type: "villa"});
        const cabinType = await RealEstate.countDocuments({Type: "cabin"});

      res.status(200).json([
        {type: "hotel", count: hotelType},
        {type: "apartment", count: apartmentType},
        {type: "resort", count: resortType},
        {type: "villa", count: villaType},
        {type: "cabin", count: cabinType}
      ]);
    } catch (error) {
      next(error);
    }
  };
  export const getRealEstateRooms = async(req, res, next) => {
    try {
        const realestate = await RealEstate.findById(req.params.id);
        const list = await Promise.all(
            realestate.Rooms.map((room) => {
              return Room.findById(room);
            })
          );
        res.status(200).json(list); 
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