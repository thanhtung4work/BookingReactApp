
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Sửa</div>
            <h1 className="title">Thông tin</h1>
            <div className="item">
              <img src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.15752-9/306324419_608809364115116_8610816102059178268_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=A0fiJqLuknYAX8RN-Q3&_nc_ht=scontent.fsgn6-1.fna&oh=03_AVKsn3hW0QKVoXfcrxXX0OOmfAfg7b07EE8TiptRPRrIEg&oe=6367D6E4"
               alt="" className="itemImg" />
               <div className="details">
                <h1 className="itemTitle">Tùng thủ khoa</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">tungkunoppa@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">0329813225</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">Ngô Đức Kế, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quốc tịch:</span>
                  <span className="itemValue">Việt Nam</span>
                </div>
               </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={5 / 1} title="Biểu đồ hoạt động (6 tháng)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;