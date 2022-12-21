import React from "react";
import FireImage from "../images/fire.png";

const Fire = React.forwardRef((props, ref) => {

    const FireStyle = {
      width: "8.75%",
      height: "14%",
      position: "absolute",
      left: "10%",
      top: "65%",
      overflow: "hidden",
      zIndex: 0
    };
  
  
    return (
        <img
          ref={ref}
          style={FireStyle}
          src={FireImage}
          alt={"Fire"}
         />
    );
});
  
export default Fire;
  