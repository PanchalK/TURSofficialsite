import classes from "./Footer.module.css";
import img1 from "../img/tu_logo.png";
import img2 from "../img/turs_logo.png";
import { Image,Link,Text, HStack, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
      <HStack>
        <Center
          gridGap="35px" 
        >
          <Image
          src={img1}
          alt=""
          w="10%"
        ></Image>
        <Image
          src={img2}
          alt=""
          w="9%"
        ></Image>
        </Center>
      </HStack>
        <Text pt={{ base: "1%", sm: "1%", md: "1%", lg: "1%" }} fontFamily="'Nunito', sans-serif">
          <strong>Tezpur University Robotics Society</strong>
        </Text>
        <Text fontFamily="'Nunito', sans-serif">Department of Computer Science and Engineering</Text>
        <Text fontFamily="'Nunito', sans-serif">School Of Engineering, Tezpur University</Text>
        <Text fontFamily="'Nunito', sans-serif">
          Contact here:{" "}
          <Link class="btn" href="mailto:roboticssocietytuofficial@gmail.com" pt="0px">
            <Text fontFamily="'Nunito', sans-serif">roboticssocietytuofficial@gmail.com</Text>
          </Link>
        </Text>
      </div>
    </>
  );
};

export default Footer;
