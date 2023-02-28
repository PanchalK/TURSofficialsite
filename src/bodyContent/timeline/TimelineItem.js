import classes from "./Timeline.module.css";
import { motion } from "framer-motion";
import { Box, Heading, Text } from "@chakra-ui/react";

const TimelineItem = ({ data }) => { 
  return (
    <Box className={classes["timeline-item"]} mt="2%" mb="2%">
      <motion.div
        className={classes["timeline-item-content"]}
        whileInView={{
          y: [50, 0],
          transition: { type: "spring", duration: 1.1 },
        }}
        viewport={{ once: true }}
      >
        <Text fontSize={{ base: "12px", sm: "14px", md: "15px", lg: "20px" }} textAlign="left">
          <strong>{data.title}</strong>
        </Text>
        <Text
          textAlign="justify"
          fontSize={{ base: "11px", sm: "13px", md: "14px", lg: "20px" }}
          
        >
          {data.text}
        </Text>
        <Heading
          color="white"
          className={classes.date}
          fontSize={{ base: "13px", sm: "18px", md: "20px", lg: "25px" }}
        >
          {data.date}
        </Heading>
      </motion.div>
      <span className={classes.circle} />
    </Box>
  );
};

export default TimelineItem;
