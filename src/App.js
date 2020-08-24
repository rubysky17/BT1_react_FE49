import React from "react";
import "./App.css";
import Header from "./BaiTapThucHanhLayout/Header";
import Sidebar from "./BaiTapThucHanhLayout/Sidebar";
import Content from "./BaiTapThucHanhLayout/Content";
import Footer from "./BaiTapThucHanhLayout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Content />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
