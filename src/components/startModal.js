import React, { useRef } from "react";
// import StartButton from "./startButton";

const StartModal = ({display, setDisplay, text}) => {

  const modalText = useRef(null);

  const modalStyle = {
    position: "absolute",
    display: "table",
    backgroundColor: "blue",
    marginTop: "35vh",
    marginLeft: "15%",
    width: "70%",
    color: "white",
    height: "30%",
    textAlign: "center",
    fontSize: "3vh",
    borderRadius: "30px",
    border: "1vh solid black",
    zIndex: 900,
    fontFamily: `'Press Start 2P', cursive`,
  };

  const modalTextStyle = {
    display: "table-cell",
    verticalAlign: "middle",
    padding: "3%",
  };

  let show = "inline-block"
  let buttonText = "START WRANGLING"
  if (text === "YOU DID IT! THE CHICKENS ARE NOW SAFE IN THEIR HOME!") {
    show = "none"
    buttonText = "PLAY AGAIN"
  }

  return (
    <>
      <div id="modal" style={modalStyle}>
        <div id="modalText" ref={modalText} style={modalTextStyle}>
            <h1 style={{color:"gold", display:show}}>{`SUPER DAD ELIAS`}</h1>
            <p>{text}</p>
            
        <button style={{backgroundColor:"gold", fontFamily: `'Press Start 2P', cursive`, borderRadius:"5px", border:"none", padding:"10px", display:show}} 
            onClick={()=>{
                setDisplay("none")
            }}>
                {buttonText}
        </button>
        </div>
      </div>
    </>
  );
};

export default StartModal;
