import { VStack, Heading, Text, Box, Flex } from "@chakra-ui/react";
import classes from "./Intro.module.css";
import { FaUsers } from "react-icons/fa";
import { CgSmile } from "react-icons/cg";
import { FaCubes } from "react-icons/fa";

const Intro = () => {
  return (
    <>
      <VStack className={classes.layer2bg} id="about">
        <Heading fontSize={{ base: "md", sm: "2xl", md: "3xl", lg: "3xl" }} mt={{lg:"8%"}} fontFamily="'Josefin Sans', sans-serif">
          HELLO THERE
        </Heading>
        <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }} fontFamily="'Josefin Sans', sans-serif">
          We Are TURS
        </Text>
        <hr className={classes.styletwo}></hr>
        <Text
          w={{ base: "80vw", sm: "80vw", md: "72vw", lg: "72vw" }}
          m="auto"
          pt={{ base: "10px", sm: "15px", md: "30px", lg: "45px" }}
          textAlign="justify"
          fontSize={{ base: ".9rem", sm: "1.2rem", md: "1.5rem", lg: "1.5rem" }}
          fontFamily="'Josefin Sans', sans-serif"
        >
          Tezpur University Robotics Society (TURS) was founded in 2010 to
          promote exchange of information about robotics to stimulate education
          in the sciences, and to promote the enjoyment of robotics as a hobby.
          We strive for the advancement of the theory and practice of robotics
          and automation engineering, science and technology and for the
          maintenance of high professional standards among its members. Society
          aids in promoting close co-operation and exchange of technical
          information among its members and to this end holds collaborative
          programs with industry, research centers, and educational institutes
          through workshops, seminars, class room training, exchange program
          etc.
        </Text>
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          w={{ base: "85vw", sm: "85vw", md: "80vw", lg: "80vw" }}
          justify="space-evenly"
        >
          <VStack
            mb={{ base: "5px", sm: "10px", md: "40px", lg: "100px" }}
            mt={{ base: "5px", sm: "10px", md: "30px", lg: "45px" }}
          >
            <Box
              fontSize={{
                base: "2.5rem",
                sm: "3.8rem",
                md: "4.3rem",
                lg: "4.8rem",
              }}
            >
              <FaUsers color="white" />
            </Box>
          
            <Text fontSize={{ base: ".9rem", sm: "1.2rem", md: "1.5rem", lg: "1.5rem" }} fontFamily="'Josefin Sans', sans-serif">30+ Members</Text>
          </VStack>
          <VStack
            mb={{ base: "5px", sm: "10px", md: "40px", lg: "100px" }}
            mt={{ base: "5px", sm: "10px", md: "30px", lg: "45px" }}
          >
            <Box
              fontSize={{
                base: "2.5rem",
                sm: "3.8rem",
                md: "4.3rem",
                lg: "4.8rem",
              }}
            >
              <FaCubes color="white" />
            </Box>
            <Text fontSize={{ base: ".9rem", sm: "1.2rem", md: "1.5rem", lg: "1.5rem" }} fontFamily="'Josefin Sans', sans-serif">3+ Completed Projects</Text>
          </VStack>
          <VStack
            mb={{ base: "30px", sm: "40px", md: "40px", lg: "100px" }}
            mt={{ base: "5px", sm: "10px", md: "30px", lg: "45px" }}
          >
            <Box
              fontSize={{
                base: "2.5rem",
                sm: "3.8rem",
                md: "4.3rem",
                lg: "4.8rem",
              }}
            >
              <CgSmile color="white" />
            </Box>
            <Text fontSize={{ base: ".9rem", sm: "1.2rem", md: "1.5rem", lg: "1.5rem" }} fontFamily="'Josefin Sans', sans-serif">1000+ Memories</Text>
          </VStack>
        </Flex>
      </VStack>
    </>
  );
};

export default Intro;
