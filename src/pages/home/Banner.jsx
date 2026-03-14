import React from "react";
import bannerImg from "../../assets/banner.jpg";
import CardAnimation from "../../component/CardAnimation";
const Banner = () => {
  return (
    <div
      className="h-dvh bg-center bg-cover bg-no-repeat hero1 relative -z-10"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="flex h-full w-full justify-center items-center absolute z-10 bg-black/30">
        <CardAnimation
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-6xl leading-18 lg:text-7xl lg:leading-22 text-gray-100   hero-content1  text-center "
        >
          Together
          <br />
          for a Better Tomorrow
        </CardAnimation>
      </div>
    </div>
  );
};

export default Banner;
