import React, { useState , useEffect } from "react";
import classes from "./Carousel.module.css";
import { Box } from "@chakra-ui/react";
import {
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { Flex, Image } from "@chakra-ui/react";
import { storage } from "../../Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [carouselData, setCarouselData] = useState([]);
  const length = carouselData.length;
  carouselData.sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    const carouselListRef = ref(storage, "gallery/");
    listAll(carouselListRef)
      .then((res) => {
        res.items.map((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            setCarouselData((prev) => [...prev, url]);
          });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

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
      mb={{ base: "10%", sm: "12%", md: "13%", lg: "11%" }}
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
                src={imageItem}
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

export default Carousel;
