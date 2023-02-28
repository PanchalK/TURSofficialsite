import React from "react";
import StartFirebase from "../../FirebaseDatabase";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import classes from "./Timeline.module.css";
import { Flex, Heading  } from "@chakra-ui/react";
import TimelineItem from "./TimelineItem";

const db = StartFirebase();

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  console.log(timelineData);
  useEffect(() => {
    let records = [];
    const dbRef = ref(db, "UpcomingEvents");
    onValue(dbRef, (data) => {
      data.forEach((dataitems) => {
        records.push(dataitems.val());
      });
      setTimelineData(records);
    });
  }, []);
  return (
    <div className={classes.Body}>
      <Heading
        fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "3xl" }}
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
        w={{ base: "95vw", sm: "93vw", md: "80vw", lg: "80vw" }}
        mt={{ base: "2%", sm: "4%", md: "5%", lg: "6%" }}
        mb={{ base: "2%", sm: "4%", md: "5%", lg: "6%" }}
      >
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </Flex>
    </div>
  );
};


export default Timeline;
