
import "./navbar.scss";

import SearchOutlineIcon from "@mui/icons-material/SearchOutlined";
import NotificationNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder="search..."/>
          <SearchOutlineIcon />
        </div>
        <div className="items">
          <div className="item">
            <NotificationNoneOutlinedIcon />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div className="item">
            <ListOutlinedIcon />
          </div>
          <div className="item">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;