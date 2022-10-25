import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="navLogo">Undersea</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Đăng ký</button>
          <button className="navButton">Đăng nhập</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;