import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Card from "../bodyContent/Card/Card";
import { storage } from "../Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Team = () => {
  const [images, setImages]= useState([]);
  images.sort((a, b) => a.localeCompare(b))
  
  useEffect(()=>{
    const listRef = ref(storage, 'coremembers/');
    listAll(listRef)
    .then((res) => {
      res.items.map((itemRef) => {
        getDownloadURL(itemRef)
        .then(url => {
          setImages(prev => [...prev, url]);
        })
      })
    })
    .catch((error) => {
      console.log(error.message);
    })
  }, [])

  return (
    <>
      <Box pb={{ base: "10%", sm: "9%", md: "8%", lg: "7%" }}>
          <Text pt={{ base: "22%", sm: "18%", md: "13%", lg: "8%" }} textAlign="center">
            Team Members
          </Text>
        <Flex
          justify="space-between"
          flexWrap="wrap"
          w={{ base: "85vw", sm: "85vw", md: "80vw", lg: "70vw" }}
          m="auto"
        > 
          <Card images={images} />
        </Flex>
      </Box>
    </>
  );
};

export default Team;
