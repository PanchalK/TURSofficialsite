import { NavLink } from "react-router-dom";
import { Box, Center, Flex, Spacer, VStack } from "@chakra-ui/react";
import { TfiMenu } from "react-icons/tfi";
import { GoX } from "react-icons/go";
import { motion } from "framer-motion";
import classes from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [Display, DisplayHandler] = useState(true);
  return (
    <Box
      h={{ base: "8", sm: "10", md: "12", lg: "14" }}
      bgGradient="linear(to-b, gray.500, #282A3A)"
      pos="fixed"
      zIndex={11}
      w="100vw"
      boxShadow="md"
    >
      <Flex justify="space-between">
        <Center
            h={{ base: "8", sm: "10", md: "12", lg: "14" }}
            w={{ base: "8", sm: "10", md: "12", lg: "14" }}
          display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}
          onClick={() => {
            DisplayHandler(() => {
              return false;
            });
          }}
        >
          <TfiMenu color="white" />
        </Center>
        {!Display && (
          <Center
            h={{ base: "8", sm: "10", md: "12", lg: "14" }}
            w={{ base: "8", sm: "10", md: "12", lg: "14" }}
            display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}
            onClick={() => {
              DisplayHandler(() => {
                return true;
              });
            }}
          >
            <GoX color="white" />
          </Center>
        )}
      </Flex>
      <Flex
        h={{ base: "8", sm: "10", md: "12", lg: "14" }}
        display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
        alignItems="center"
        pr={{ base: "2%", sm: "5%", md: "10%", lg: "20%" }}
        pl={{ base: "2%", sm: "5%", md: "10%", lg: "20%" }}
      >
        <Flex>
          <NavLink className={classes.active} to="/home">
            Home
          </NavLink>
        </Flex>
        <Spacer />
        <Box>
          <NavLink className={classes.active} to="/about">
            About Us
          </NavLink>
        </Box>
        <Spacer />
        <Box>
          <NavLink className={classes.active} to="/objectives">
            Objectives
          </NavLink>
        </Box>
        <Spacer />
        <Box>
          <NavLink className={classes.active} to="/workshop">
            Workshop
          </NavLink>
        </Box>
        <Spacer />
        <Box>
          <NavLink className={classes.active} to="/team">
            Team
          </NavLink>
        </Box>
        <Spacer />
        <Box>
          <NavLink className={classes.active} to="/members">
            Members
          </NavLink>
        </Box>
        <Spacer />
        <Box>
          <NavLink className={classes.active} to="/registration">
            Registration
          </NavLink>
        </Box>
        <Spacer />
        <Box>
          <NavLink className={classes.active} to="/blog">
            Blog
          </NavLink>
        </Box>
      </Flex>
      <motion.div
        initial={{ opacity: 0 }}
        animate={Display ? { y: [0, -15] } : { opacity: 1, y: [-15, 0] }}
        transition={{ duration: 0.3 }}
        display={{ base: "block", sm: "block", md: "none", lg: "none" }}
      >
        <VStack
          backgroundColor="#282A3A"
          display={!Display ? "flex" : "none"}
          p="1%"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [-200, 0],
              transition: { duration: 1, type: "spring", delay: 0.1 },
            }}
          >
            <NavLink
              className={classes.active}
              to="/home"
              onClick={() => {
                DisplayHandler((prev) => {
                  return !prev;
                });
              }}
            >
              Home
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [-200, 0],
              transition: { duration: 1, type: "spring", delay: 0.2 },
            }}
          >
            <NavLink
              className={classes.active}
              to="/about"
              onClick={() => {
                DisplayHandler((prev) => {
                  return !prev;
                });
              }}
            >
              About Us
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [-200, 0],
              transition: { duration: 1, type: "spring", delay: 0.3 },
            }}
          >
            <NavLink
              className={classes.active}
              to="/objectives"
              onClick={() => {
                DisplayHandler((prev) => {
                  return !prev;
                });
              }}
            >
              Objectives
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [-200, 0],
              transition: { duration: 1, type: "spring", delay: 0.4 },
            }}
          >
            <NavLink
              className={classes.active}
              to="/workshop"
              onClick={() => {
                DisplayHandler((prev) => {
                  return !prev;
                });
              }}
            >
              Workshop
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [-200, 0],
              transition: { duration: 1, type: "spring", delay: 0.5 },
            }}
          >
            <NavLink
              className={classes.active}
              to="/team"
              onClick={() => {
                DisplayHandler((prev) => {
                  return !prev;
                });
              }}
            >
              Team
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [-200, 0],
              transition: { duration: 1, type: "spring", delay: 0.6 },
            }}
          >
            <NavLink
              className={classes.active}
              to="/members"
              onClick={() => {
                DisplayHandler((prev) => {
                  return !prev;
                });
              }}
            >
              Members
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [-200, 0],
              transition: { duration: 1, type: "spring", delay: 0.7 },
            }}
          >
            <NavLink
              className={classes.active}
              to="/registration"
              onClick={() => {
                DisplayHandler((prev) => {
                  return !prev;
                });
              }}
            >
              Registration
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [-200, 0],
              transition: { duration: 1, type: "spring", delay: 0.8 },
            }}
          >
            <NavLink
              className={classes.active}
              to="/blog"
              onClick={() => {
                DisplayHandler((prev) => {
                  return !prev;
                });
              }}
            >
              Blog
            </NavLink>
          </motion.div>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default Header;
