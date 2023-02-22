import classes from "./CardItem.module.css";
import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const CardItem = (props) => {
  return (
    <>
      <Box
        className={classes.card}
        ml={{ base: "0", sm: "1%", md: "2%", lg: "3%" }}
        mr={{ base: "0", sm: "1%", md: "2%", lg: "3%" }}
      >
        <Box
          className={`${classes.face} ${classes.face1}`}
          w={{ base: "26vw", sm: "24vw", md: "22vw", lg: "16vw" }}
          h={{ base: "21vh", sm: "23vh", md: "24vh", lg: "42vh" }}
        >
          <VStack
            className={classes.content}
            // p={{base:"5px",sm:"6px",md:"7px",lg:"16px"}}
          >
            <Image
              src={props.image}
              alt="blank"
              w={{ base: "18vw", sm: "15vw", md: "16vw", lg: "11vw" }}
            />
            <Text
              fontSize={{ base: "7px", sm: "9px", md: "13px", lg: "16px" }}
              fontFamily="'Josefin Sans', sans-serif"
            >
              {props.name}
            </Text>
            <Text
              fontSize={{ base: "7px", sm: "9px", md: "13px", lg: "16px" }}
              fontFamily="'Josefin Sans', sans-serif"
            >
              {props.post}
            </Text>
          </VStack>
        </Box>
        <Center
          className={`${classes.face} ${classes.face2}`}
          w={{ base: "26vw", sm: "24vw", md: "22vw", lg: "16vw" }}
          h={{ base: "4vh", sm: "6vh", md: "6vh", lg: "12vh" }}
        >
          <HStack
            w={{ base: "18vw", sm: "19vw", md: "18vw", lg: "12vw" }}
            justify="space-between"
          >
            <motion.button
              initial={{ color: "white" }}
              whileHover={{ color: "#DDDDDD" }}
            >
              {" "}
              <BsFacebook cursor="pointer" className={classes.icons} />
            </motion.button>
            <motion.button
              initial={{ color: "white" }}
              whileHover={{ color: "#DDDDDD" }}
            >
              {" "}
              <BsLinkedin cursor="pointer" className={classes.icons} />
            </motion.button>
            <motion.button
              initial={{ color: "white" }}
              whileHover={{ color: "#DDDDDD" }}
            >
              {" "}
              <BsInstagram cursor="pointer" className={classes.icons} />
            </motion.button>
          </HStack>
        </Center>
      </Box>
    </>
  );
};

export default CardItem;
