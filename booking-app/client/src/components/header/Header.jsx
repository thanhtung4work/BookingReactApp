import "./header.css";
import 'react-date-range/dist/styles.css'; // date range main css file
import 'react-date-range/dist/theme/default.css'; // date range theme css file
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlaneUp, faCar, faMountainCity, faSearchLocation, faCalendarDays, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openPeopleOption, setOpenPeopleOption] = useState(false);
  const [peopleOption, setPeopleOption] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const [dateRanges, setDateRanges] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleOpenCalendar = () => {
    setOpenCalendar(!openCalendar)
  };
  const handleOpenPeopleOption = () => {
    setOpenPeopleOption(!openPeopleOption)
  };
  const  handleOption = (name, op) => {
    setPeopleOption(prev => {
      return {
        ...prev,
        [name]: op === "+" ? peopleOption[name] + 1 : peopleOption[name] - 1
      };
    });
  };
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const { dispatch } = useContext(SearchContext)
  const handleSearch = () => {
    dispatch({type:"NEW_SEARCH",payload:{destination, dateRanges, peopleOption}});
    navigate("/hotels",{state:{ destination, dateRanges, peopleOption}})
  }
  return (
    <div className="header">
      <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed}/>
            <span>Tìm nơi nghỉ ngơi</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlaneUp}/>
            <span>Tìm chuyến bay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar}/>
            <span>Dịch vụ xe</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMountainCity}/>
            <span>Danh lam thắng cảnh</span>
          </div>
        </div>
        {
          type !== "list" &&
          <>
          <h1 className="headerTitle">Bạn đang tìm chỗ nghỉ ngơi, bạn đã đến đúng chỗ òi</h1>
          <p className="headerDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae expedita officiis. Odio veniam quasi illum maxime ipsam corporis! Nisi vel quae aliquid sunt totam.
          </p>
          {!user && <button className="headerButton">Đăng ký / Đăng xuất</button>}
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faSearchLocation} className="headerSearchIcon"/>
              <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Địa điểm trong tâm trí của bạn?"
                className="headerSearchInput"
                onChange={e=>setDestination(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerSearchIcon"/>
              <span className="headerSearchText" onClick={handleOpenCalendar}>
                {`${format(dateRanges[0].startDate, "dd/MM/yyyy")} - ${format(dateRanges[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {
                openCalendar
                &&
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setDateRanges([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRanges}
                  className="headerSearchDate"
                  minDate={new Date()} 
                />
              }
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPeopleGroup} className="headerSearchIcon"/>
              <span className="headerSearchText" onClick={handleOpenPeopleOption}>
                {`${peopleOption.adult} adult(s) ~ ${peopleOption.children} child(ren) ~ ${peopleOption.room} room(s)`}
              </span>
              {
                openPeopleOption
                &&
                <div className="headerOptions">
                  <div className="headerOptionItem">
                    <span className="headerOptionText">Adult</span>
                    <div className="counter">
                      <button 
                        className="headerCounterButton" 
                        onClick={() => handleOption("adult", "+")}
                      >
                        +
                      </button>
                      <span class="headerOptionCounter">{peopleOption.adult}</span>
                      <button 
                        className="headerCounterButton" 
                        onClick={() => handleOption("adult", "-")}
                        disabled={peopleOption.adult <= 1}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="headerOptionItem">
                    <span className="headerOptionText">Children</span>
                    <div className="counter">
                      <button className="headerCounterButton" onClick={() => handleOption("children", "+")}>+</button>
                      <span class="headerOptionCounter">{peopleOption.children}</span>
                      <button 
                        className="headerCounterButton" 
                        onClick={() => handleOption("children", "-")}
                        disabled={peopleOption.children <= 0}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="headerOptionItem">
                    <span className="headerOptionText">Room</span>
                    <div className="counter">
                      <button 
                      className="headerCounterButton" 
                      onClick={() => handleOption("room", "+")}
                      >
                        +
                      </button>
                      <span class="headerOptionCounter">{peopleOption.room}</span>
                      <button 
                        className="headerCounterButton" 
                        onClick={() => handleOption("room", "-")}
                        disabled={peopleOption.room <= 1}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              }
              
            </div>
            <div className="headerSearchItem">
              <button className="headerButton" onClick={handleSearch}>Tìm</button>
            </div>
          </div>
          </>
        }
      </div>
    </div>
  )
}

export default Header;