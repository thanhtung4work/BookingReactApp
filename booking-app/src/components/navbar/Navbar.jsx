import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="navLogo">BanDiNguChua</span>
        <div className="navItems">
          <button className="navButton">Sign Up</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;