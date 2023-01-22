import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "../bodyContent/Card/Card";

const Team = () => {
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
          <Card />
        </Flex>
      </Box>
    </>
  );
};

export default Team;
