import React from "react";
import Header from "./BaiTapThucHanhLayout/Header";
import Sidebar from "./BaiTapThucHanhLayout/Sidebar";
import Footer from "./BaiTapThucHanhLayout/Footer";
import ProductItem from "./BaiTapThucHanhLayout/ProductItem";
import Carousel from "./BaiTapThucHanhLayout/Carousel";

function App() {
  return (
    <div>
      <Header />
      <div className="row container-fluid">
        <div className="col-2 mt-5">
          <Sidebar />
        </div>

        <div className="col-10 mt-2">
          <div className="row my-2">
            <Carousel />
          </div>
          <div className="row">
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
