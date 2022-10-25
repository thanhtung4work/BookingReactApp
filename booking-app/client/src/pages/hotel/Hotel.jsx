import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../footer/Footer";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(`${id}`)
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useFetch(`/realestate/find/${id}`);
  
const handleOpen = (i) =>{
  setSlideNumber(i);
  setOpen(true);
}
const handleMove = (direction) => {
  let newSlideNumber;
  if(direction === "l"){
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
  }else{
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
  }

  setSlideNumber(newSlideNumber)
};

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      {loading ? ("loading") : (
      <div className="hotelContainer">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
            <div className="sliderWrapper">
              <img src={data.Photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Đặt ngay!!!</button>
          <h1 className="hotelTitle">{data.Name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faMapLocationDot}/>
            <span>{data.Address}</span>
          </div>
          <span className="hotelDistance">
            {data.Distance}
          </span>
          <span className="hotelPriceHighLight">
            Giá: {data.CheapestPrice}
          </span>
          <div className="hotelImages">
                {data.Photos?.map((photo,i)=>(
                  <div className="hotelImgWrapper">
                    <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelImg" />
                  </div>
                ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.Title}</h1>
              <p className="hotelDesc">
              {data.Desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Một nơi hoàn hảo!</h1>
              <span>
                Một nơi hoàn hảo cho rèn luyện tinh thần và
                sức chịu đựng của bản thân trước những thử thách!!!
              </span>
              <h2>
                <b>$999</b> (4 năm)
              </h2>
              <button>Đặt ngay!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>)}
    </div>
  );
};

export default Hotel;