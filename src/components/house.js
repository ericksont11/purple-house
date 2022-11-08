import React from "react";
import HouseImage from "../images/house.png";

const House = React.forwardRef((props, ref) => {

    const houseStyle = {
      width: "25%",
      height: "40%",
      position: "absolute",
      left: "40%",
      top: "0%",
      overflow: "hidden",
    };
  
  
    return (
        <img
            style={houseStyle}
            src={HouseImage}
            alt={"Purple House"}
        />
    )
});
  
export default House;
  