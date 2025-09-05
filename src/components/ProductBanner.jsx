import React from "react";
import advertiment from "../assets/images/advertisement.jpg";

const ProductBanner = () => {
  return (
    <section id="advertisement">
      <div className="container">
        <img src={advertiment} alt="" />
      </div>
    </section>
  );
};

export default ProductBanner;
