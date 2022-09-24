import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../footer/Footer";

const Hotel = () => {
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
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Khách sản thủ khoa</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faMapLocationDot}/>
            <span>273 An Dương Vương</span>
          </div>
          <span className="hotelDistance">
            cách trung tâm 100m
          </span>
          <span className="hotelPriceHighLight">
            Giá $999 bao gồm thuế và phí
          </span>
          <div className="hotelImages">
                {photos.map(photo=>(
                  <div className="hotelImgWrapper">
                    <img src={photo.src} alt="" className="hotelImg" />
                  </div>
                ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
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