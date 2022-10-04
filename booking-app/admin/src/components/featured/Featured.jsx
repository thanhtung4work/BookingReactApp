
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h2 className="title">Total booking</h2>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
        </div>
        <p className="title">Total bookings make today</p>
        <p className="amount">69420</p>
        <h3 className="summaryTitle">This month</h3>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">80085</div>
          </div>
          <div className="item">
            <div className="itemTitle">Current</div>
            <div className="itemResult">70072</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;