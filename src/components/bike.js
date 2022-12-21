import React from "react";
import BikeImage from "../images/bike.png";

const Bike = React.forwardRef((props, ref) => {

    const BikeStyle = {
      width: "8%",
      height: "12%",
      position: "absolute",
      left: "30%",
      top: "38%",
      overflow: "hidden",
    };
  
  
    return (
        <img
          ref={ref}
          style={BikeStyle}
          src={BikeImage}
          alt={"Bike"}
         />
    );
});
  
export default Bike;