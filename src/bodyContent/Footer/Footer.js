import classes from "./Footer.module.css";
import img1 from "../img/tu_logo.png";
import { Image,Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <Image
          src={img1}
          alt=""
          w="10%"
          
        ></Image>
        <Text mt={{ base: "5%", sm: "5%", md: "2%", lg: "10%" }}>
          <strong>Tezpur University Robotics Society</strong>
        </Text>
        <p>Department of Computer Science and Engineering</p>
        <p>School Of Engineering, Tezpur University</p>
        <p>
          Contact here:{" "}
          <a class="btn" href="mailto:roboticssocietytuofficial@gmail.com">
            roboticssocietytuofficial@gmail.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
