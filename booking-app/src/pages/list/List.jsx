import { format } from "date-fns/esm";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";

const List = () => {
  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination) 
  const [dateRange,setDateRange] = useState(location.state.dateRange) 
  const [openDateRange,setOpenDateRange] = useState(false) 
  const [peopleOption, setPeopleOption] = useState(location.state.peopleOption) 
  return(
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Tìm kiếm</h1>
            <div className="lsItem">
              <label>Điểm đến</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Ngày nhận phòng</label>
              <span onClick={() =>setOpenDateRange(!openDateRange)}>
                {`${format(dateRange[0].startDate, "dd/MM/yyyy")} - ${format(dateRange[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDateRange &&<DateRange 
                  onChange={(item) => setDateRange([item.selection])} 
                  minDate={new Date()}  
                  ranges={dateRange} 
                />}
            </div>
            <div className="lsItem">
              <label>Tuỳ chọn</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Giá thấp nhất/đêm
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Giá tốt nhất/đêm
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Người lớn 
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={peopleOption.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Trẻ em
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={peopleOption.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Số phòng
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={peopleOption.room}/>
              </div>
              </div>
            </div>
            <button>Tìm kiếm</button>
          </div>
          <div className="listResult">
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
          </div>
                
        </div> 
      </div>
    </div>
  );
}

export default List;