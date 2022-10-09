
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BarChartIcon from '@mui/icons-material/BarChart';
import {Link} from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return(
    <div className="sidebar">
      <div className="top">
        <span className="logo">Underseadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">CHỨC NĂNG</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Trang chủ</span>
          </li>
          <li>
            <PeopleIcon  className='icon'/>
            <span>Người dùng</span>
          </li>
          <li>
            <MapsHomeWorkIcon  className='icon'/>
            <span>Phòng</span>
          </li>
          <li>
            <MeetingRoomIcon  className='icon'/>
            <span>Đơn đặt</span>
          </li>
          <li>
            <BarChartIcon  className='icon'/>
            <span>Thống kê</span>
          </li>
          <p className="title">TÀI KHOẢN</p>
          <li>
            <AccountBoxIcon  className='icon'/>
            <span>Thông tin tài khoản</span>
          </li>
          <li>
            <LogoutIcon  className='icon'/>
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;