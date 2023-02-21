import classes from "./CardItem.module.css";
import {
  Box,
  Center,
  HStack,
  Image,
} from "@chakra-ui/react";
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
          h={{ base: "20vh", sm: "21vh", md: "24vh", lg: "40vh" }}
        >
          <div className={classes.content}>
            <Image
              src={props.image}
              alt="blank"
              w={{ base: "20vw", sm: "18vw", md: "16vw", lg: "12vw" }}
            />
            <h4>{props.name}</h4>
            <p>{props.post}</p>
          </div>
        </Box>
        <Center
          className={`${classes.face} ${classes.face2}`}
          w={{ base: "26vw", sm: "24vw", md: "22vw", lg: "16vw" }}
          h={{ base: "4vh", sm: "6vh", md: "6vh", lg: "12vh" }}
        >
          <HStack w={{ base: "18vw", sm: "19vw", md: "18vw", lg: "12vw" }} justify="space-between">
            <motion.button initial={{color:"white"}} whileHover={{color:"#DDDDDD"}}>
              {" "}
              <BsFacebook cursor="pointer" className={classes.icons}/>
            </motion.button>
            <motion.button initial={{color:"white"}} whileHover={{color:"#DDDDDD"}}>
              {" "}
              <BsLinkedin cursor="pointer" className={classes.icons}/>
            </motion.button>
            <motion.button initial={{color:"white"}} whileHover={{color:"#DDDDDD"}}>
              {" "}
              <BsInstagram cursor="pointer" className={classes.icons}/>
            </motion.button>
          </HStack>
        </Center>
      </Box>
    </>
  );
};

export default CardItem;
