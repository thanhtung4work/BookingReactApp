import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Tiết kiệm thời gian, tiết kiệm tiền bạc!</h1>
      <p className="mailDesc">Đăng ký và tụi tui sẽ gửi cho bạn deal tốt nhất</p>
      <div className="mailInputContainer">
        <input type="text" placeholder="your email"/>
        <button>Subcribe</button>
      </div>
    </div>
  )
}

export default MailList;