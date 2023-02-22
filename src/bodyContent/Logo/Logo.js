import classes from "./Logo.module.css";
import imgurl from "../img/TURS2.png";
import { motion } from "framer-motion";
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

function Logo() {
  return (
    <>
      <Box
        bgGradient="linear(-120deg, #ff5858 0%, #f09819 100%)"
        h={{ base: "60vh", sm: "80vh", md: "65vh", lg: "115vh" }}
      >
        <VStack
          className={classes.layer1}
          h={{ base: "55vh", sm: "75vh", md: "60vh", lg: "115vh" }}
        >
          <Image
            w={{ base: "50vw", sm: "70vw", md: "50vw", lg: "35vw" }}
            mt={{ base: "20%", sm: "15%", md: "11%", lg: "8%" }}
            src={imgurl}
            alt=""
          ></Image>
          <motion.div>
            <Heading fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}>
              <motion.p
                initial={{ opacity: 0 }}
                transition={{ type: "spring", duration: 1 }}
                whileInView={{
                  opacity: 1,
                  x: [-500, 0],
                }}
                viewport={{ once: true }}
              >
                <Text fontFamily="Black Ops One">Tezpur University</Text>
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                transition={{ type: "spring", duration: 1 }}
                whileInView={{
                  opacity: 1,
                  x: [500, 0],
                }}
                viewport={{ once: true }}
              >
                <Text color="black" fontFamily="'Black Ops One', cursive">
                  Robotics Society
                </Text>
              </motion.p>
            </Heading>
          </motion.div>
          <HStack
            spacing={{ base: "5%", sm: "5%", md: "7%", lg: "9%" }}
            justify="center"
            pt="1%"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: [-50, 10, 0],
                transition: {
                  type: "spring",
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <Text
                fontSize={{ base: "xl", sm: "2xl", md: "4xl", lg: "5xl" }}
                fontFamily="'Kumbh Sans', sans-serif"
              >
                BUILD.
              </Text>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: [-50, 10, 0],
                transition: {
                  type: "spring",
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <Text
                fontSize={{ base: "xl", sm: "2xl", md: "4xl", lg: "5xl" }}
                fontFamily="'Kumbh Sans', sans-serif"
              >
                CREATE.
              </Text>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: [-50, 10, 0],
                transition: {
                  type: "spring",
                  duration: 0.5,
                  delay: 1,
                },
              }}
              viewport={{ once: true }}
            >
              <Text
                fontSize={{ base: "xl", sm: "2xl", md: "4xl", lg: "5xl" }}
                fontFamily="'Kumbh Sans', sans-serif"
              >
                LEARN.
              </Text>
            </motion.p>
          </HStack>
          <Text
            fontSize={{ base: "sm", sm: "md", md: "2xl", lg: "2xl" }}
            pt={{ base: "20%", sm: "15%", md: "11%", lg: ".4%" }}
            fontFamily="'Nunito', sans-serif"
          >
            Tezpur University's student led robotics club aimed at creating
            waves in the field of robotics.
          </Text>
        </VStack>
      </Box>
    </>
  );
}

export default Logo;
