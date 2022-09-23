import "./header.css";
import 'react-date-range/dist/styles.css'; // date range main css file
import 'react-date-range/dist/theme/default.css'; // date range theme css file
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlaneUp, faCar, faMountainCity, faSearchLocation, faCalendarDays, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const Header = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openPeopleOption, setOpenPeopleOption] = useState(false);
  const [peopleOption, setPeopleOption] = useState({
    adult: 1,
    children: 1,
    room: 1
  });
  const [dateRange, setDateRange] = useState([
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

  return (
    <div className="header">
      <div className="headerContainer">
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
        <h1 className="headerTitle">Bạn đang tìm chỗ nghỉ ngơi, bạn đã đến đúng chỗ òi</h1>
        <p className="headerDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae expedita officiis. Odio veniam quasi illum maxime ipsam corporis! Nisi vel quae aliquid sunt totam.
        </p>
        <button className="headerButton">Sign in / Login</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faSearchLocation} className="headerSearchIcon"/>
            <input 
              type="text" 
              name="" 
              id="" 
              placeholder="Địa điểm trong tâm trí của bạn?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerSearchIcon"/>
            <span className="headerSearchText" onClick={handleOpenCalendar}>
              {`${format(dateRange[0].startDate, "dd/MM/yyyy")} - ${format(dateRange[0].endDate, "dd/MM/yyyy")}`}
            </span>
            {
              openCalendar
              &&
              <DateRange
                editableDateInputs={true}
                onChange={item => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                className="headerSearchDate"
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
                    <button className="headerCounterButton">+</button>
                    <span class="headerOptionCounter">1</span>
                    <button className="headerCounterButton">-</button>
                  </div>
                </div>
                <div className="headerOptionItem">
                  <span className="headerOptionText">Children</span>
                  <div className="counter">
                    <button className="headerCounterButton">+</button>
                    <span class="headerOptionCounter">0</span>
                    <button className="headerCounterButton">-</button>
                  </div>
                </div>
                <div className="headerOptionItem">
                  <span className="headerOptionText">Room</span>
                  <div className="counter">
                    <button className="headerCounterButton">+</button>
                    <span class="headerOptionCounter">1</span>
                    <button className="headerCounterButton">-</button>
                  </div>
                </div>
              </div>
            }
            
          </div>
          <div className="headerSearchItem">
            <button className="headerButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;