import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="navLogo">Undersea</span>
        <div className="navItems">
          <button className="navButton">Đăng ký</button>
          <button className="navButton">Đăng nhập</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;