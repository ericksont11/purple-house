import React from "react";

const ActivityFeed = React.forwardRef(({text}, ref) => {

    const feedStyle = {
        width: "30%",
        height: "20%",
        position: "absolute",
        left: "5%",
        top: "90%",
        overflow: "hidden",
        display: "none",
        color:"white",
        zIndex: 15
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
  