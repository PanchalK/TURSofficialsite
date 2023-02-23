import React from "react";
import classes from "./Timeline.module.css";
// import { motion } from "framer-motion";
import { Box, Container, Flex, Heading  } from "@chakra-ui/react";
import timelinData from "./timelineData";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className={classes.Body}>
      <Heading
        fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "3xl" }}
        pt={{ base: "2%", sm: "3%", md: "4%", lg: "4%" }}
        pb={{ base: "2%", sm: "3%", md: "4%", lg: "4%" }}
        color="white"
      >
        Upcomming Events
      </Heading>
      <hr className={classes.hzrow}></hr>
      <Flex
        className={classes["timeline-container"]}
        direction="column"
        w={{ base: "90vw", sm: "90vw", md: "80vw", lg: "80vw" }}
        mt={{ base: "2%", sm: "4%", md: "5%", lg: "6%" }}
        mb={{ base: "2%", sm: "4%", md: "5%", lg: "6%" }}
      >
        {timelinData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </Flex>
    </div>
  );
};


export default Timeline;
