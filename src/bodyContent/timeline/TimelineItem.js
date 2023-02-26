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
        <Text fontSize={{ base: "4px", sm: "8px", md: "12px", lg: "20px" }} textAlign="left">
          <strong>{data.title}</strong>
        </Text>
        <Text
          textAlign="justify"
          fontSize={{ base: "5px", sm: "10px", md: "15px", lg: "20px" }}
          
        >
          {data.text}
        </Text>
        <Heading
          color="white"
          className={classes.date}
          fontSize={{ base: "10px", sm: "15px", md: "20px", lg: "25px" }}
        >
          {data.date}
        </Heading>
      </motion.div>
      <span className={classes.circle} />
    </Box>
  );
};

export default TimelineItem;
