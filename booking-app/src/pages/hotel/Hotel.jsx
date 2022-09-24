import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../footer/Footer";
import { useState } from "react";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrypA67CzphgEQLWGQSvXA89TqO438y3Co3w&usqp=CAU",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rU6RGLr-AApWqUrteVeRl0e0p_KDBp5d4Q&usqp=CAU",
    },
    {
      src:"http://data.voh.com.vn/voh/Image/2021/08/27/Tuyen-sinh-Dai-hoc-Sai-Gon-2021.jpeg",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HVF_EanwgQSHxGFu2-yfZvEYB2mRGGZkrw&usqp=CAU",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnV9cfuZ5SsqScgW9VnXWqObA7Pb1ckCMzTxnRcZkQNm9wpBHbvaOpksNa7hIAG4CRnaI&usqp=CAU",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrhn0CUGCkO3bqUdvHFKkxjJ7WxeHk9WGPA&usqp=CAU",
    },
  ];
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
      <div className="hotelContainer">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Đặt ngay!!!</button>
          <h1 className="hotelTitle">Địa bàn của thủ khoa</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faMapLocationDot}/>
            <span>273 An Dương Vương ,Phường 3, Quận 5, Thành phố Hồ Chí Minh.</span>
          </div>
          <span className="hotelDistance">
            Cách trung tâm 100m
          </span>
          <span className="hotelPriceHighLight">
            Giá $999 bao gồm thuế và phí
          </span>
          <div className="hotelImages">
                {photos.map((photo,i)=>(
                  <div className="hotelImgWrapper">
                    <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                  </div>
                ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Trong lòng thành phố</h1>
              <p className="hotelDesc">
              Trường Đại học Sài Gòn là một cơ sở giáo dục đại học đa ngành trực thuộc Ủy ban Nhân dân TP.
              Hồ Chí Minh, được thành lập theo Quyết định số 478/QĐ-TTg  ngày 25/04/2007 của Thủ tướng Nguyễn Tấn 
              Dũng trên cơ sở nâng cấp từ Trường Cao đẳng Sư phạm Thành phố Hồ Chí Minh.Khoa Công nghệ Thông tin, 
              Khoa Sư phạm Khoa học Tự nhiên, Khoa Sư phạm Khoa học Xã hội, Khoa Luật, Khoa Khoa học Môi trường, 
              Khoa Thư viện - Văn phòng, Khoa Toán - Ứng dụng, Khoa Ngoại ngữ, Khoa Văn hóa và Du lịch, 
              Khoa Điện tử - Viễn thông, Khoa Nghệ thuật, Khoa Giáo dục Chính trị, Khoa Giáo dục, 
              Khoa Giáo dục Tiểu học.
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
      </div>
    </div>
  );
};

export default Hotel;