import React from "react";
import KelseyImage from "../images/kelsey.png";

const Kelsey = React.forwardRef((props, ref) => {

    const KelseyStyle = {
      width: "6%",
      height: "18%",
      position: "absolute",
      left: "79%",
      top: "21.5%",
      overflow: "hidden",
    };
  
  
    return (
        <img
          ref={ref}
          style={KelseyStyle}
          src={KelseyImage}
          alt={"Kelsey"}
         />
    );
});
  
export default Kelsey;