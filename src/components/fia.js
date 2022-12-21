import React from "react";
import FiaImage from "../images/fia.png";

const Fia = React.forwardRef((props, ref) => {

    const FiaStyle = {
      width: "4.75%",
      height: "14%",
      position: "absolute",
      left: "88%",
      top: "85%",
      overflow: "hidden",
    };
  
  
    return (
        <img
          ref={ref}
          style={FiaStyle}
          src={FiaImage}
          alt={"Fia"}
         />
    );
});
  
export default Fia;
  