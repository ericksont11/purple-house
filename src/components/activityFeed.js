import React from "react";

const ActivityFeed = React.forwardRef(({text}, ref) => {

    const feedStyle = {
        height: "20%",
        position: "absolute",
        left: "3%",
        top: "15%",
        overflow: "hidden",
        display: "none",
        color:"orange",
        zIndex: 15,
        fontSize: "4vmin",
        textShadow: ".5px 0 0 #000, 0 -.5px 0 #000, 0 .5px 0 #000, -.5px 0 0 #000"
    };
  
  
    return (
        <div
            ref={ref}
            style={feedStyle}
            alt={"Activity Feed"}
        >
           THIS IS SOME TEXT
        </div>
    );
});
  
export default ActivityFeed;
  