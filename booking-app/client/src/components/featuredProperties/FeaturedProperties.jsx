import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css"


const FeaturedProperties = () => {
   const {data, loading, error} = useFetch("/realestate?Featured=true&limit=4");
   
  return(
    <div className="fp">
    {loading ? (
      "Loading"
    ) : (
      <>
        {data.map((item) => (
          <div className="fpItem" key={item._id}>
            <img
              src={item.Photos[0]}         
              alt=""
              className="fpImg"
            />
            <span className="fpName">{item.Name}</span>
            <span className="fpCity">{item.City}</span>
            <span className="fpPrice">Starting from ${item.CheapestPrice}</span>
            {item.Rating && <div className="fpRating">
              <button>{item.Rating}</button>
              <span>Excellent</span>
            </div>}
          </div>
        ))}
      </>
    )}
  </div>
);
};

export default FeaturedProperties;