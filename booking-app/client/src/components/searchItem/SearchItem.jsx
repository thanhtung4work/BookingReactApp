import { Link } from "react-router-dom";
import "./searchItem.css"
function SearchItem({item}) {
  return (
    <div className="searchItem">
        <img 
          src={item.Photos[0]}    
          alt="" 
          className="siImg" 
        />
      <div className="siDesc">
        <h1 className="siTitle">{item.Name}</h1>
        <span className="siDistance">{item.Distance}</span>
        <span className="siTaxiOp">Taxi sân bay miễn phí</span>
        <span className="siSubtitle">
          Căn hộ hiện đại đầy đủ tiện nghi
        </span>
        <span className="siFeatures">
          Căn hộ - 1 phòng tắm - 21m² -1 giường đầy đủ
        </span>
        <span className="siCancelOp">Huỷ miễn phí</span>
        <span className="siCancelOpSubtitle">
            Bạn có thể hủy sau, vì vậy hãy chốt giá ưu đãi này ngay hôm nay!
        </span>
      </div>
       <div className="siDetails">
       {item.Rating && <div className="siRating">
          <span>Tuyệt vời</span>
          <button>{item.Rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.CheapestPrice}</span>
          <span className="siTaxOp">Gồm thuế và phí</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Còn trống !!</button>
          </Link>
        </div>
      </div> 
    </div>
  );
};

export default SearchItem;