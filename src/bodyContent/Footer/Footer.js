import classes from "./Footer.module.css";
import img1 from "../img/tu_logo.png";
import { Image } from "@chakra-ui/react";


const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <Image src={img1} alt="" w="10%"></Image>
        <p>
          <strong>Tezpur University Robotics Society</strong>
        </p>
        <p>Department of Computer Science and Engineering</p>
        <p>School Of Engineering, Tezpur University</p>
        <p>
          Contact here: <a class="btn" href="mailto:roboticssocietytuofficial@gmail.com">roboticssocietytuofficial@gmail.com</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
