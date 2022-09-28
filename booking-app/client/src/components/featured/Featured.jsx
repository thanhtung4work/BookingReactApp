import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img 
          src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" 
          alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Đà lạt</h1>
          <h2>Cùng nhau xập xìn</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
          src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" 
          alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Đạt là</h1>
          <h2>Cùng nhau xập xìn</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
          src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" 
          alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lạt đà</h1>
          <h2>Cùng nhau xập xìn</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured;