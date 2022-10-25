import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data, loading, error, reFetch} = useFetch("/realestate/countByCity?cities=Hồ+Chí+Minh,Hà+Nội");
  
  return (
    <div className="featured">
      {loading ? ("Loading please wait") : (<><div className="featuredItem">
        <img 
          src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" 
          alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>tp Hồ Chí Minh</h1>
          <h2>{data[0]}</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
          src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" 
          alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hà Nội<img src="" alt="" srcset="" /></h1>
          <h2>{data[1]}</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
          src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" 
          alt="" 
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Đà Nẵng</h1>
          <h2>{data[0]}</h2>
        </div>
      </div></>)}
    </div>
  )
}

export default Featured;