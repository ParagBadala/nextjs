import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
// import slideImage1 from "/images/template_1_Images/slider.jpg";
// import slideImage2 from "/images/template_1_Images/slider1.jpg";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  root: {
    borderRadius: 30,
    marginBottom: theme.spacing(4),
    maxWidth: "100%",
  },
}));

const Slider = (props) => {
  const classes = useStyles();
  return (
    <Carousel
      infiniteLoop={true}
      showArrows={false}
      showThumbs={false}
      autoPlay
    >
      <div>
        <img src="/images/template_1_Images/slider.jpg" alt="Slider1" />
        <div
          className={classes.mainFeaturedPostContent}
          style={{
            position: "absolute",
            color: "white",
            top: 10,
            left: "40%",
            alignContent: "left",
            transform: "translateX(-50%)",
          }}
        ></div>
      </div>

      <div>
        <img src="/images/template_1_Images/slider.jpg" alt="Slider2" />
        <div
          className={classes.mainFeaturedPostContent}
          style={{
            position: "absolute",
            color: "white",
            top: 10,
            left: "30%",
            alignContent: "left",
            transform: "translateX(-50%)",
          }}
        ></div>
      </div>

      <div>
        <img src="/images/template_1_Images/slider.jpg" alt="Slider1" />
        <div
          className={classes.mainFeaturedPostContent}
          style={{
            position: "absolute",
            color: "white",
            top: 10,
            left: "30%",
            alignContent: "left",
            transform: "translateX(-50%)",
          }}
        ></div>
      </div>
    </Carousel>
  );
};

export default Slider;
