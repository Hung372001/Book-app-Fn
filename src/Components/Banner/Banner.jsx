import React from "react";
import img1 from "./../../img/Slider/Megasale_Main_Banner_Slide_840x320.jpg";
import img2 from "./../../img/Megasale_Flashsale_Subbanner_392x156.jpg";
import { Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Img_Items, Img_Slider } from "./../../Data/IMG_Items";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container maxW="1230px" marginTop="16px">
      <Flex gap="4px">
        <Swiper style={{ width: "875px" }}>
          {Img_Slider.map((item, key) => (
            <SwiperSlide>
              <img src={item} style={{ borderRadius: "8px" }} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Flex direction="column" gap="4px">
          <div>
            <img src={img2} style={{ borderRadius: "8px" }} />
          </div>
          <div>
            <img src={img2} style={{ borderRadius: "8px" }} />
          </div>
        </Flex>
      </Flex>
      <Flex gap="10px" marginTop="32px">
        {Img_Items.map((item, key) => (
          <div>
            <img src={item} key={key} style={{ borderRadius: "8px" }} />
          </div>
        ))}
      </Flex>
    </Container>
  );
};

export default Banner;
