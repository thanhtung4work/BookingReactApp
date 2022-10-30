import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { realEstateInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const navigate = useNavigate();
  const inputs = realEstateInputs;

  const {data, loading, error} = useFetch("/room");

  const handleChange = (e) => {
    setInfo( prev => ({...prev, [e.target.id] : e.target.value}));
  }

  const handleRoomSelect = (e) => {
    const values = Array.from(e.target.selectedOptions, option=>option.value);
    setRooms(values);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      const list = await Promise.all(Object.values( files ).map( async (file)=>{
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'upload');

        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dl2magzwn/image/upload", 
          data
        );
  
        const {url} = uploadRes.data;
        return url;
      }));

      const newHotel = {
        ...info, Rooms: rooms, Photos: list
      }

      await axios.post("/realestate", newHotel);
      navigate("/realestate");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new real estate</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                    id={input.id}
                    type={input.type} 
                    placeholder={input.placeholder} 
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                  <label>Featured</label>
                  <select id="Featured" onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
              </div>
              <div className="selectRooms">
                  <label>Rooms</label>
                  <select id="Rooms" multiple onChange={handleRoomSelect}>
                    {loading ? "loading" : data && data.map(room => (
                      <option key={room._id} value={room._id}>{room.Title}</option>
                    ))}
                  </select>
              </div>
              <div>
                <button onClick={handleClick}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
