import React from "react";
import CoopImage from "../images/coop.png";

const Coop = React.forwardRef((props, ref) => {

    const coopStyle = {
      width: "20%",
      height: "20%",
      position: "absolute",
      left: "81%",
      top: "60%",
      overflow: "hidden",
    };
  
  
    return (
        <img
        ref={ref}
        style={coopStyle}
        src={CoopImage}
        alt={"Chicken Coop"}
    />
    );
});
  
export default Coop;
  