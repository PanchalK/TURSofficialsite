import classes from "./Card.module.css";
import img1 from "../img/NAYAN.jpeg";
import img2 from "../img/ZB.jpeg";
import img3 from "../img/ZK.jpeg";
import img4 from "../img/BiswajitBharali.jpeg";
import img5 from "../img/AdilBinBhutto.jpg";
import img6 from "../img/DeepankarAcharya.jpeg"
import img7 from "../img/DevangaBorah.jpeg"
import img8 from "../img/DhrubaJyotiSut.jpeg"
import img9 from "../img/KanishkaChowdhury.jpeg"
import CardItem from "./CardItem";

const Card = () => {
  return (
    <>
    <div className={classes.body}>
      <div className={classes.container}>
        <CardItem image={img1}/>
        <CardItem image={img2}/>
        <CardItem image={img3}/>
        <CardItem image={img4}/>
        <CardItem image={img5}/>
        <CardItem image={img6}/>
        <CardItem image={img7}/>
        <CardItem image={img8}/>
        <CardItem image={img9}/>
      </div>
    </div>
    
    </>
  );
};

export default Card;
