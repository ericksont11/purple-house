import React from "react";
import TurtleImage from "../images/turtle.png";

const Turtle = React.forwardRef((props, ref) => {

    const TurtleStyle = {
      width: "5%",
      height: "8%",
      position: "absolute",
      left: "20%",
      top: "85%",
      overflow: "hidden",
    };
  
  
    return (
        <img
          ref={ref}
          style={TurtleStyle}
          src={TurtleImage}
          alt={"Turtle"}
         />
    );
});
  
export default Turtle;