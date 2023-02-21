import classes from "./Registration.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {  useHistory } from "react-router-dom";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { storage } from "../Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Registration = () => {
  const [image, setImage]= useState("");
  
  useEffect(()=>{
    const listRef = ref(storage, 'upicode/');
    listAll(listRef)
    .then((res) => {
      res.items.map((itemRef) => {
        getDownloadURL(itemRef)
        .then(url => {
          setImage(url);
        })
      })
    })
    .catch((error) => {
      console.log(error.message);
    })
  }, [])

  const History = useHistory();
  const RedirectHandler = () => {
    History.push("/registration/registerYourself");
  };
  return (
    <Box
      className={classes.body}
      pt={{ base: "22%", sm: "18%", md: "13%", lg: "8%" }}
    >
      <Box w="80vw" m="auto">
        <Heading
          fontSize={{ base: "14px", sm: "16px", md: "20px", lg: "25px" }}
        >
          Make your payment of 300Rs through this UPI/QRcode below
        </Heading>
        <Text
          fontSize={{ base: "12px", sm: "15px", md: "19px", lg: "23px" }}
          mb={{ base: "3%", sm: "3%", md: "3%", lg: "3%" }}
          mt={{ base: "4%", sm: "3%", md: "1%", lg: "1%" }}
          color="#2E86C1"
        >
          manishkumar0917@ybl
        </Text>
        <Box w="20vw" m="auto">
          <motion.div
            className={classes.image}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            whileFocus={{ scale: 1.2 }}
          >
            <img src={image} alt=""></img>
          </motion.div>
        </Box>
        <Text
          w={{ base: "70%", sm: "70%", md: "50%", lg: "45%" }}
          m="auto"
          mt={{ base: "3%", sm: "4%", md: "4%", lg: "4%" }}
          mb={{ base: "5%", sm: "4%", md: "2%", lg: "2%" }}
          fontSize={{ base: "10px", sm: "12px", md: "16px", lg: "20px" }}
        >
          Please make payment before going to the registration page
        </Text>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <Button colorScheme='teal' variant='solid' onClick={RedirectHandler}>
            <strong>Register Here</strong>
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Registration;
