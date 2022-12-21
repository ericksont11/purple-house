import React from "react";
import TansyImage from "../images/tansy.png";

const Tansy = React.forwardRef((props, ref) => {

    const tansyStyle = {
      width: "4.75%",
      height: "14%",
      position: "absolute",
      left: "94%",
      top: "85%",
      overflow: "hidden",
    };
  
  
    return (
        <img
          ref={ref}
          style={tansyStyle}
          src={TansyImage}
          alt={"Tansy"}
         />
    );
});
  
export default Tansy;
  