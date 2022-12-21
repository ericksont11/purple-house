import React, {useRef, useContext, useEffect, useState} from "react";
import Character from '../components/character';
import Chicken from '../components/chicken'
import { LevelContext } from "../contexts/levelContext";
import Coop from "../components/coop"
import House from "../components/house"
import Tansy from "../components/tansy"
import ActivityFeed from "../components/activityFeed"
import ActivityFeed2 from "../components/activityFeed2"
import Clover from "../components/clover";
import Fia from "../components/fia"
import Kelsey from "../components/kelsey";
import Turtle from "../components/turtle";
import Bike from "../components/bike";
import Fire from "../components/fire";


function Homepage() {

    const [speed, setSpeed] = useState(1)
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

    const bikeRef = useRef(null)
    const fireRef = useRef(null)
    const tansyRef = useRef(null)
    const fiaRef = useRef(null)
    const cloverRef = useRef(null)
    const backgroundRef = useRef(null)
    const turtleRef = useRef(null)
    const kelseyRef = useRef(null)
    const coopRef = useRef(null);
    const activityFeedRef = useRef(null)
    const activityFeedRef2 = useRef(null)
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


    const countStyle = {
        fontSize: "7vmin",
        position: "absolute",
        height: "10%",
        color:"white",
        left: "3%",
        textShadow: ".5px 0 0 #000, 0 -.5px 0 #000, 0 .5px 0 #000, -.5px 0 0 #000"
    }

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
        <div style={backgroundStyle} ref={backgroundRef}>
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
                kelseyRef={kelseyRef}
                ref={characterRef} 
                tansyRef={tansyRef}
                activityFeedRef={activityFeedRef}
                activityFeedRef2={activityFeedRef2}
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
                setSpeed={setSpeed}
                turtleRef={turtleRef}
                backgroundRef={backgroundRef}
                fiaRef={fiaRef}
                cloverRef={cloverRef}
                bikeRef={bikeRef}
                fireRef={fireRef}
            />
            <Chicken name={"Hop Little Bunny"} color={"red"} ref={chickenRef} speed={speed} intervalRef={intervalRef} num={0} restart={restartOneRef} setRestart={setRestartOne}/>
            <Chicken name={"Tigerlily"} color={"yellow"} ref={chickenTwoRef} speed={speed} intervalRef={intervalTwoRef} num={1}  restart={restartTwoRef} setRestart={setRestartTwo}/>
            <Chicken name={"Nugget"} color={"purple"} ref={chickenThreeRef} speed={speed} intervalRef={intervalThreeRef} num={2}  restart={restartThreeRef} setRestart={setRestartThree}/>
            <Chicken name={"Joan"} color={"orange"} ref={chickenFourRef} speed={speed} intervalRef={intervalFourRef} num={3}  restart={restartFourRef} setRestart={setRestartFour}/>
            <Chicken name={"Pigwidgeon"} color={"maroon"} ref={chickenFiveRef} speed={speed} intervalRef={intervalFiveRef} num={4}  restart={restartFiveRef} setRestart={setRestartFive}/>
            <Coop ref={coopRef}/>
            <House/>
            <Tansy ref={tansyRef}/>
            <Kelsey ref={kelseyRef}/>
            <Fia ref={fiaRef}/>
            <Clover ref={cloverRef}/>
            <Turtle ref={turtleRef}/>
            <Bike ref={bikeRef}/>
            <ActivityFeed ref={activityFeedRef}/>
            <ActivityFeed2 ref={activityFeedRef2}/>
            <Fire ref={fireRef}/>
            <div style={countStyle}>{`COUNT:  `}{chickenCount}</div>
        </div>
    );
}

export default Homepage;
