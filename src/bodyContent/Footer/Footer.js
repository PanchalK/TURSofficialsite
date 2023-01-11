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
        <p>Department of CSE</p>
        <p>School Of Engineering, Tezpur University</p>
        <p>
          Contact here: tursonline@gmail.com | <a href="@"> admin</a>
        </p>
        <p>
          Made with <i className="fa fa-heart" aria-hidden="true"></i> in <strong>TU</strong>
        </p>
      </div>
    </>
  );
};

export default Footer;
