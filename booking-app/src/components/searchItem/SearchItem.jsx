import "./searchItem.css"
function SearchItem() {
  return (
    <div className="searchItem">
        <img 
          src="https://media-cdn.tripadvisor.com/media/photo-s/10/12/ce/06/20170724-071226-largejpg.jpg" 
          alt="" 
          className="siImg" 
        />
      <div className="siDesc">
        <h1 className="siTitle">Căn hộ của thủ khoa</h1>
        <span className="siDistance">100m từ trung tâm</span>
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
        <div className="siRating">
          <span>Tuyệt vời</span>
          <button>10.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$9999</span>
          <span className="siTaxOp">Gồm thuế và phí</span>
          <button className="siCheckButton">Còn trống !!</button>
        </div>
      </div> 
    </div>
  );
};

export default SearchItem;