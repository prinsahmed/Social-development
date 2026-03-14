import React from "react";
import treeImg from "../../assets/tree plantation.jpg";
import road from "../../assets/repair road.jpg";
import areaClean from "../../assets/cleaning area.jpg";
import CardAnimation from "../../component/CardAnimation";

const Gallery = () => {
  return (
    <div className="pt-28">
      <h2 className="text-4xl font-semibold text-center pb-6">
        Stories Through Pictures
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-y-0 gap-y-20 gap-x-4">
        <CardAnimation
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
         
        >
          <img
            className="h-[450px] w-full rounded-sm lg:hover:scale-105 transition-all duration-300"
            src={treeImg}
            alt="Tree plantation image"
          />
          <h2 className="font-medium text-center mt-3">Tree Plantation</h2>
        </CardAnimation>
        <CardAnimation
         
        >
          <img
            className="h-[450px] w-full rounded-sm lg:hover:scale-105 transition-all duration-300"
            src={road}
            alt="Road repairing image"
          />
          <h2 className="font-medium text-center mt-3">Road Repairing</h2>
        </CardAnimation>
        <CardAnimation
         initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="h-[450px] w-full lg:hover:scale-105 transition-all duration-300 rounded-sm"
            src={areaClean}
            alt="Cleaning image"
          />
          <h2 className="font-medium text-center mt-3">Cleaning</h2>
        </CardAnimation>
      </div>
    </div>
  );
};

export default Gallery;
