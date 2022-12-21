import React from "react";
import CloverImage from "../images/clover.png";

const Clover = React.forwardRef((props, ref) => {

    const CloverStyle = {
      width: "4.75%",
      height: "14%",
      position: "absolute",
      left: "86%",
      top: "25%",
      overflow: "hidden",
    };
  
  
    return (
        <img
          ref={ref}
          style={CloverStyle}
          src={CloverImage}
          alt={"Clover"}
         />
    );
});
  
export default Clover;
  