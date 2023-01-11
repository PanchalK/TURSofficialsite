import classes from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <>
      <div className={classes.card}>
        <div className={`${classes.face} ${classes.face1}`}>
          <div className={classes.content}>
            <img src={props.image} alt="blank" />
            <h4>Dr. abc </h4>
            <p>post</p>
          </div>
        </div>
        <div className={`${classes.face} ${classes.face2}`}>
          <div className={classes.content}>
            <a href="www.facebook.com"><i className="fa fa-facebook fa-2x"></i></a>
            <a href="www.linkdin.com"><i className="fa fa-linkedin fa-2x"></i></a>
            <a href="www.github.com"><i className="fa fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
