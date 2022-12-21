import React, { useState, useEffect } from "react";
import TurtleImage from "../images/turtle.png";

const Turtle = React.forwardRef((props, ref) => {
    const [left, setLeft] = useState("20%")
    const TurtleStyle = {
      width: "5%",
      height: "8%",
      position: "absolute",
      left: left,
      top: "85%",
      overflow: "hidden",
    };

    const startTurtle = (left) => {
        let position = 20
        let move = "right"
        setInterval(()=>{
            position = position
            if(parseFloat(position) < 70 && move === "right"){
                setLeft(parseFloat(position) + .1 + "%")
                position = parseFloat(position) + .1 + "%"
            } else if(parseFloat(position) >= 70 && move === "right"){
                move = "left"
            } else if(parseFloat(position) > 20 && move === "left") {
                setLeft(parseFloat(position) - .1 + "%")
                position = parseFloat(position) + - .1 + "%"
            } else if(parseFloat(position) <= 20 && move === "left"){
                move = "right"
            }
        }, 50)
    }

    useEffect(()=>{
        startTurtle(left)
    },[])
  
  
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