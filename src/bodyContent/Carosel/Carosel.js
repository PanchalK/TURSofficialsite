import React, { useState } from "react";
import classes from "./Carosel.module.css";
import carouselData from "./carouselData";
import { Box } from "@chakra-ui/react";
import {
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { Flex, Image } from "@chakra-ui/react";

const Carosel = () => {
  const [current, setCurrent] = useState(0);
  const length = carouselData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  return (
    <Flex
      className={classes.slider}
      mb={{ base: "10%", sm: "12%", md: "13%", lg: "15%" }}
    >
      <Box fontSize={{base:"12px", sm:"18px", md:"24px",lg:"35px"}} >
        <IoIosArrowBack
          className={classes.leftarrow}
          onClick={prevSlide}
          color="white"
        />
      </Box>
      <Box fontSize={{base:"12px", sm:"18px", md:"24px",lg:"35px"}} >
        <IoIosArrowForward
          className={classes.rightarrow}
          onClick={nextSlide}
          color="white"
        />
      </Box>
      {carouselData.map((imageItem, index) => {
        return (
          <div
            className={
              index === current
                ? `${classes.slide} ${classes.active}`
                : classes.slide
            }
            key={index}
          >
            {index === current && (
              <Image
                src={imageItem.image}
                alt=""
                className={classes.image}
                w={{ base: "65vw", sm: "60vw", md: "60vw", lg: "55vw" }}
                h={{ base: "22vh", sm: "32vh", md: "32vh", lg: "60vh" }}
              />
            )}
          </div>
        );
      })}
    </Flex>
  );
};

export default Carosel;
