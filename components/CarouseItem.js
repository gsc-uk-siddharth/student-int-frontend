import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useCallback, useEffect } from "react";

import Image from "next/image";

const CarouselItem = () => {
  return (
    <>
      {/* <div
        className="bg-cover bg-center sm:hidden"
        style={{
          backgroundImage: `url('/images/carousel-md.jpg')`,
          width: "100%",
          height: "100%",
        }}
      ></div> */}
      <div className=" sm:block md:block lg:block xl:block 2xl:block">
        <Carousel
          showThumbs={false}
          interval={3000}
          autoPlay={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          showArrows={false}
        >
          <div>
            <img src="/images/1.svg" alt="image1" />
          </div>
          <div>
            <img src="/images/2.svg" alt="image2" />
          </div>
          <div>
            <img src="/images/3.svg" alt="image3" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselItem;
