// styling
import "./home.css";

// components
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Các loại chỗ nghỉ của tụi tui</h1>
        <PropertyList/>
        <h1 className="homeTitle">Chỗ nghỉ yêu thích</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;