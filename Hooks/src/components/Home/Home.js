import React from "react";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quasi,
        cupiditate alias quas dole nostrum? Voluptate, totam. Suscipit quas
        voluptatibus enim quisquam officiis ipsa a!
      </p>
      <h3>Lorem ipsum dolor sit amet conse Totam!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at
        praesentium sit esse quidem, porro so?
      </p>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero velit
        ea architecto! Facere omnisrum alias, amet accusamus, cupiditate magni
        quae dolores! Non?
      </p>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
