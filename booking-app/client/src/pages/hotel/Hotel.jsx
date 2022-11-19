import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../footer/Footer";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reverse from "../../components/reverse/Reverse";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { data, loading, error } = useFetch(`/realestate/find/${id}`);
  const { dateRanges, peopleOption } = useContext(SearchContext);
  

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  let days = 0;
  
  if(dateRanges.length !== 0){
     days = dayDifference(dateRanges[0].endDate,dateRanges[0].startDate);
  }
  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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

    const handleClick = () => {
      if(user){
        setOpenModal(true);
      }else {
        navigate("/login");
      }
    }

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
                <b>{days * data.CheapestPrice * peopleOption.room}</b> ({days})
              </h2>
              <button onClick={handleClick}>Đặt ngay!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>)}
      {openModal && <Reverse setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;