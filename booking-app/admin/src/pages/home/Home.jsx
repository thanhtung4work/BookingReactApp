
import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import List from "../../components/table/Table";
import "./home.scss";

const Home  = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users"/>
          <Widget type="bookings"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1 }/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;