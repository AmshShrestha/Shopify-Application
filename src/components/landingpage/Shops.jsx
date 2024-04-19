import React from "react";
import { useSelector } from "react-redux";

const Shops = () => {
  const images = useSelector((state) => state.shop.shopImages);
  return (
    <div>
      <div className="container flex flex-col gap-12">
        <div>
          <h1 className="font-bold text-4xl">#@Shop By Instagram</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 mx-auto gap-6">
          {images.map((shop, index) => (
            <div key={index}>
              <img src={shop.image} alt={shop.name} className="rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;
