import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        About Us
      </Typography>
      <Typography className={classes.body} variant="h6">
        Here are ROPE.com we are building the largest selection of rope in all
        sizes, types, colors, and uses. We partner with the best manufacturers
        to stock our warehouse so you can buy your favorite lines by the foot.
        You use to have to choose between quality and quantity — now you can
        have both. We are a company of creatives, rope experts, and customer
        experience fanatics. We pride ourselves on providing an effortless
        shopping experience and customer service you can be stoked about.
      </Typography>
    </div>
  );
};

export default About;
