import React, {useRef, useContext, useEffect, useState} from "react";
import Character from '../components/character';
import Chicken from '../components/chicken'
import { LevelContext } from "../contexts/levelContext";
import Coop from "../components/coop"
import House from "../components/house"
import Tansy from "../components/tansy"
import ActivityFeed from "../components/activityFeed"
import Grass from "../images/grass.png"


function Homepage() {

    const [restartOne, setRestartOne] = useState()
    const [restartTwo, setRestartTwo] = useState()
    const [restartThree, setRestartThree] = useState()
    const [restartFour, setRestartFour] = useState()
    const [restartFive, setRestartFive] = useState()
    const [chickenCount, setChickenCount] = useState(0)
    const chickenCountRef = useRef(chickenCount);
    const restartOneRef = useRef(restartOne);
    const restartTwoRef = useRef(restartTwo);
    const restartThreeRef = useRef(restartThree);
    const restartFourRef = useRef(restartFour);
    const restartFiveRef = useRef(restartFive);

    const tansyRef = useRef(null)
    const coopRef = useRef(null);
    const activityFeedRef = useRef(null)
    const characterRef = useRef(null);
    const chickenRef = useRef(null);
    const chickenTwoRef = useRef(null);
    const chickenThreeRef = useRef(null);
    const chickenFourRef = useRef(null);
    const chickenFiveRef = useRef(null);
    const intervalRef = useRef();
    const intervalTwoRef = useRef();
    const intervalThreeRef = useRef();
    const intervalFourRef = useRef();
    const intervalFiveRef = useRef();
    const level = useContext(LevelContext);

    const backgroundStyle = {
        width: level.levelAttributes.width,
        height: level.levelAttributes.height,
        background:
        "linear-gradient(to bottom, #87CEEB 0%, #87CEEB 35%, #00A619 35%, #00A619 100%)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        overflow: "hidden",
    };

    useEffect(() => {
        
        if (window.innerHeight * 1.777 > window.innerWidth) {
        level.dispatch("RESIZE_PORTRAIT");
        } else {
        level.dispatch("RESIZE_LANDSCAPE");
        }
        window.onresize = () => {
        if (window.innerHeight * 1.777 > window.innerWidth) {
            level.dispatch("RESIZE_PORTRAIT");
        } else {
            level.dispatch("RESIZE_LANDSCAPE");
        }
        };
    }, []);


    return (
        <div style={backgroundStyle}>
            {/* <div 
                style={{
                    position: "fixed",
                    top: "35%",
                    left: "0%",
                    width: "100%",
                    height: "65%",
                    backgroundImage: `url(${Grass})`,
                }}
                src="test"
            ></div> */}
            <Character 
                ref={characterRef} 
                tansyRef={tansyRef}
                activityFeedRef={activityFeedRef}
                chickenCountRef={chickenCountRef} 
                setChickenCount={setChickenCount} 
                chickenRef={chickenRef} 
                chickenTwoRef={chickenTwoRef} 
                chickenThreeRef={chickenThreeRef} 
                chickenFourRef={chickenFourRef} 
                chickenFiveRef={chickenFiveRef} 
                intervalRef={intervalRef} 
                intervalTwoRef={intervalTwoRef} 
                intervalThreeRef={intervalThreeRef} 
                intervalFourRef={intervalFourRef} 
                intervalFiveRef={intervalFiveRef} 
                coopRef={coopRef} 
                restartOneRef={restartOneRef} 
                restartTwoRef={restartTwoRef} 
                restartThreeRef={restartThreeRef} 
                restartFourRef={restartFourRef} 
                restartFiveRef={restartFiveRef} 
                setRestartOne={setRestartOne} 
                setRestartTwo={setRestartTwo}
                setRestartThree={setRestartThree}
                setRestartFour={setRestartFour}
                setRestartFive={setRestartFive}
            />
            <Chicken name={"Tigerlily"} color={"red"} ref={chickenRef} intervalRef={intervalRef} num={0} restart={restartOneRef} setRestart={setRestartOne}/>
            <Chicken name={"Nugget"} color={"yellow"} ref={chickenTwoRef} intervalRef={intervalTwoRef} num={1}  restart={restartTwoRef} setRestart={setRestartTwo}/>
            <Chicken name={"Lemon"} color={"purple"} ref={chickenThreeRef} intervalRef={intervalThreeRef} num={2}  restart={restartThreeRef} setRestart={setRestartThree}/>
            <Chicken name={"Jello"} color={"orange"} ref={chickenFourRef} intervalRef={intervalFourRef} num={3}  restart={restartFourRef} setRestart={setRestartFour}/>
            <Chicken name={"Pip"} color={"maroon"} ref={chickenFiveRef} intervalRef={intervalFiveRef} num={4}  restart={restartFiveRef} setRestart={setRestartFive}/>
            <Coop ref={coopRef}/>
            <House/>
            <Tansy ref={tansyRef}/>
            <ActivityFeed ref={activityFeedRef}/>
            <div>{chickenCount}</div>
        </div>
    );
}

export default Homepage;
