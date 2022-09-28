import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLists">
        <ul className="footerList">
          <li className="fListItem">Quốc gia</li>
          <li className="fListItem">Khu vực</li>
          <li className="fListItem">Thành phố</li>
        </ul>
        <ul className="footerList">
          <li className="fListItem">Nhà</li>
          <li className="fListItem">Căn hộ</li>
          <li className="fListItem">Resort</li>
          <li className="fListItem">Biệt thự</li>
        </ul>
        <ul className="footerList">
          <li className="fListItem">Chỗ nghỉ độc đáo</li>
          <li className="fListItem">Tất cả các điểm đến</li>
          <li className="fListItem">Khám phá</li>
          <li className="fListItem">Đánh giá khách hàng</li>
        </ul>
        <ul className="footerList">
          <li className="fListItem">Giới thiệu</li>
          <li className="fListItem">Việc làm</li>
          <li className="fListItem">Truyền thông</li>
        </ul>
      </div>
      <div className="footerText">Made by MyOpenSourceTeam</div>
    </div>
  )
};

export default Footer;
