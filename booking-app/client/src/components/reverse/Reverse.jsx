import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./reverse.css";

const Reverse = ({setOpen, hotelId}) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const { data, loading, error} = useFetch(`/realestate/room/${hotelId}`);
    const { dateRanges } = useContext(SearchContext);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
        dates.push(new Date(date).getTime());
        date.setDate(date.getDate() + 1);
        }

        return dates;
    };
    const allDates = getDatesInRange(dateRanges[0].startDate, dateRanges[0].endDate);
    

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
          allDates.includes(new Date(date).getTime())
        );
    
        return !isFound;
    };
    

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
          checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item) => item !== value)
        );
      };
    
    
    const navigate = useNavigate();

    const handleClick = async () => {
    try {
        await Promise.all(
        selectedRooms.map((roomId) => {
            const res = axios.put(`/room/availability/${roomId}`, {
            dates: allDates,
            });
            return res.data;
        })
        );
        setOpen(false);
        navigate("/");
    } catch (err) {}
    };


  return (
    <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=> setOpen(false)}/>
            <span>Chọn phòng:</span>
            {data.map((item) => (
            <div className="rItem" key={item._id}>
                <div className="rItemInfo">
                    <div className="rTitle">{item.Title}</div>
                  {/* //<div className="rDesc">{item.Desc}</div> */}
                    <div className="rMax">
                        Max people: <b>{item.MaxPeople}</b>
                    </div>
                    <div className="rPrice">{item.Price}</div>

                </div>
                {item.RoomNumbers.map((roomNumber) => (
                    <div className="room">
                        <label>{roomNumber.number}</label>
                        <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)} />
                    </div>
                ))}
            </div>           
            ))}
            <button onClick={handleClick} className="rButton">
                Đặt ngay!
            </button>
        </div>
    </div>
  )
}

export default Reverse