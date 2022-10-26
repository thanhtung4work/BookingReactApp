import { format } from "date-fns/esm";
import { useContext, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { Navigate, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./list.css";

const List = () => {
  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination) 
  const [dateRanges,setDateRanges] = useState(location.state.dateRanges) 
  const [openDateRange,setOpenDateRange] = useState(false) 
  const [peopleOption, setPeopleOption] = useState(location.state.peopleOption) 
  const [min, setMin] = useState(undefined) 
  const [max, setMax] = useState(undefined) 
  const { data, loading, error, reFetch } = useFetch(
    `/realestate?City=${destination}&min=${min || 0 }&max=${max || 999}`
    );

  const handleClick = () => {
    reFetch();
  };

  const { dispatch } = useContext(SearchContext)
  const  handleOption = (e) => {
    let num = parseInt(e.target.value);
    if(isNaN(num)) num = "";
    setPeopleOption(prev => {
      return {
        ...prev,
        [e.target.name]: num
        
      };
    });
  };
  useEffect(()=> {
    dispatch({type:"NEW_SEARCH",payload:{destination, dateRanges, peopleOption}})
  },[peopleOption])
  
  
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
              <input placeholder={destination} onChange={e=>setDestination(e.target.value)} type="text" />
            </div>
            <div className="lsItem">
              <label>Ngày nhận phòng</label>
              <span onClick={() =>setOpenDateRange(!openDateRange)}>
                {`${format(dateRanges[0].startDate, "dd/MM/yyyy")} - ${format(dateRanges[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDateRange &&<DateRange 
                  onChange={(item) => setDateRanges([item.selection])} 
                  minDate={new Date()}  
                  ranges={dateRanges} 
                />}
            </div>
            <div className="lsItem">
              <label>Tuỳ chọn</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Giá thấp nhất/đêm
                </span>
                <input type="number" min="1" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Giá tốt nhất/đêm
                </span>
                <input type="number" min="1" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Người lớn 
                </span>
                <input type="number" min={1} className="lsOptionInput" onChange={e => handleOption(e.target.value)} name="adult" value={peopleOption.adult} placeholder={peopleOption.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Trẻ em
                </span>
                <input type="number" min={0} className="lsOptionInput" onChange={handleOption} name="children" value={peopleOption.children} placeholder={peopleOption.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Số phòng
                </span>
                <input type="number" min={1} className="lsOptionInput" onChange={handleOption} name="room" value={peopleOption.room} placeholder={peopleOption.room}/>
              </div>
              </div>
            </div>
            <button onClick={handleClick}>Tìm kiếm</button>
          </div>
          <div className="listResult">
                {loading ? "loading" : 
                <>
                {data.map(item =>(
                  <SearchItem item={item} key={item._id}/>
                ))}
                
                </>}
                
          </div>
                
        </div> 
      </div>
    </div>
  );
}

export default List;