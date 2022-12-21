import React, { useContext, useEffect, useRef, useState } from "react";
import { CharacterContext } from "../contexts/characterContext";
import EliFront from "../images/eli.png";
import FastEli from "../images/fast_eli.png";
import EliChicken from "../images/eli-chicken.png";
import KelseyCelebrating from "../images/kelsey.gif";
import KelseyImage from "../images/kelsey.png";
import { EnemyContext } from "../contexts/enemyContext";

const Character = React.forwardRef(({
  coopRef,
  tansyRef,
  chickenCountRef,
  setChickenCount, 
  chickenRef, 
  chickenTwoRef, 
  chickenThreeRef, 
  chickenFourRef, 
  chickenFiveRef, 
  intervalRef, 
  intervalTwoRef, 
  intervalThreeRef, 
  intervalFourRef, 
  intervalFiveRef, 
  restartOneRef,
  restartTwoRef, 
  restartThreeRef, 
  restartFourRef, 
  restartFiveRef, 
  setRestartOne, 
  setRestartTwo,
  setRestartThree,
  setRestartFour,
  setRestartFive,
  activityFeedRef,
  kelseyRef,
  turtleRef,
  backgroundRef,
  activityFeedRef2,
  fiaRef,
  cloverRef,
  bikeRef,
  fireRef
  }, 
  ref
   ) => {
  let recentKey = "";
  let interval = "";
  const chickenNames = ["Hop Little Bunny", "Tigerlily", "Nugget", "Joan", "Pigwidgeon"]

  const holding = false
  let holdingRef = useRef(holding);
  
  const character = useContext(CharacterContext);
  const characterRef = useRef(character);
  const enemyContext = useContext(EnemyContext)
  
  const intervalSpeed = 33.33;
  const setRefs = () => {
    characterRef.current = character;
  };
  setRefs();

  const characterStyle = {
    position: "absolute",
    left: character.characterAttributes.left,
    top: character.characterAttributes.top,
    height: "18%",
    width: "6%",
    zIndex: 10,
    // backgroundColor:"blue"
  };

  let slowed = false
  let fast = false
  const chickenCaught = []
  const characterControls = (
    e,
    character,
    characterRef,
    holdingRef
  ) => {
    if (e.repeat || ref.current.style.display === "none") return;
    if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
      e.preventDefault();
      clearInterval(interval);
      if (e.key.toLowerCase() === "d") recentKey = "d";
      if (e.key === "ArrowRight") recentKey = "ArrowRight";
      interval = setInterval(() => {
        character.dispatch({ type: "MOVE_RIGHT" });
      }, intervalSpeed);
    } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
      e.preventDefault();
      clearInterval(interval);
      if (e.key.toLowerCase() === "a") recentKey = "a";
      if (e.key === "ArrowLeft") recentKey = "ArrowLeft";
      interval = setInterval(() => {
        character.dispatch({ type: "MOVE_LEFT" });
      }, intervalSpeed);
    } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
      e.preventDefault();
      clearInterval(interval);
      if (e.key.toLowerCase() === "s") recentKey = "s";
      if (e.key === "ArrowDown") recentKey = "ArrowDown";
      interval = setInterval(() => {
        character.dispatch({ type: "MOVE_DOWN", ref:fireRef });
      }, intervalSpeed);
    } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
      e.preventDefault();
      clearInterval(interval);
      if (e.key.toLowerCase() === "w") recentKey = "w";
      if (e.key === "ArrowUp") recentKey = "ArrowUp";
      interval = setInterval(() => {
        character.dispatch({ type: "MOVE_UP", ref:fireRef });
      }, intervalSpeed);
    } else if (e.key === " " || e.key === "Enter") {

      if(holdingRef.current === false) {
        if((parseFloat(ref.current.style.top) < parseFloat(turtleRef.current.style.top) + parseFloat(turtleRef.current.style.height)) && (parseFloat(ref.current.style.top) + parseFloat(ref.current.style.height) > parseFloat(turtleRef.current.style.top)) && (parseFloat(ref.current.style.left) + parseFloat(ref.current.style.width) > parseFloat(turtleRef.current.style.left)) && (parseFloat(ref.current.style.left) < parseFloat(turtleRef.current.style.width) + parseFloat(turtleRef.current.style.left) && turtleRef.current.style.display !== "none" && slowed === false)
        ){
          console.log(slowed)
          slowed = true
          enemyContext.dispatch({ type: "REDUCE_SPEED" });
          backgroundRef.current.style.background = "linear-gradient(to bottom, #B1B1B1 0%, #B1B1B1 35%, #444444 35%, #444444 100%)"
          setTimeout(()=>{
            enemyContext.dispatch({ type: "INCREASE_SPEED" });
            backgroundRef.current.style.background = "linear-gradient(to bottom, #87CEEB 0%, #87CEEB 35%, #00A619 35%, #00A619 100%)"
            slowed = false
          }, 4500)
        }
        if((parseFloat(ref.current.style.top) < parseFloat(bikeRef.current.style.top) + parseFloat(bikeRef.current.style.height)) && (parseFloat(ref.current.style.top) + parseFloat(ref.current.style.height) > parseFloat(bikeRef.current.style.top)) && (parseFloat(ref.current.style.left) + parseFloat(ref.current.style.width) > parseFloat(bikeRef.current.style.left)) && (parseFloat(ref.current.style.left) < parseFloat(bikeRef.current.style.width) + parseFloat(bikeRef.current.style.left) && bikeRef.current.style.display !== "none" && fast === false)
        ){
          console.log(fast)
          fast = true
          character.dispatch({ type: "SPEED_UP" });
          ref.current.src = FastEli
          setTimeout(()=>{
            fast = false
            character.dispatch({ type: "RESET_SPEED" });
            if (holdingRef.current === false) {
              ref.current.src = EliFront
            } else {
              ref.current.src = EliChicken
            }
          }, 4500)
        }
        if((parseFloat(ref.current.style.top) < parseFloat(chickenTwoRef.current.style.top) + parseFloat(chickenTwoRef.current.style.height)) && (parseFloat(ref.current.style.top) + parseFloat(ref.current.style.height) > parseFloat(chickenTwoRef.current.style.top)) && (parseFloat(ref.current.style.left) + parseFloat(ref.current.style.width) > parseFloat(chickenTwoRef.current.style.left)) && (parseFloat(ref.current.style.left) < parseFloat(chickenTwoRef.current.style.width) + parseFloat(chickenTwoRef.current.style.left) && chickenTwoRef.current.style.display !== "none")
        ){
          ref.current.src = EliChicken
          clearInterval(intervalTwoRef.current)
          holdingRef.current = true
          chickenTwoRef.current.style.display = "none"
          activityFeedRef.current.style.display = `block`
          activityFeedRef.current.innerText = `Eli caught ${chickenTwoRef.current.id}!`
          kelseyRef.current.src = KelseyCelebrating
          chickenCaught.push(2)
          setTimeout(()=>{
            activityFeedRef.current.style.display = `none`
            kelseyRef.current.src = KelseyImage
          }, 3000)
        } else if((parseFloat(ref.current.style.top) < parseFloat(chickenRef.current.style.top) + parseFloat(chickenRef.current.style.height)) && (parseFloat(ref.current.style.top) + parseFloat(ref.current.style.height) > parseFloat(chickenRef.current.style.top)) && (parseFloat(ref.current.style.left) + parseFloat(ref.current.style.width) > parseFloat(chickenRef.current.style.left)) && (parseFloat(ref.current.style.left) < parseFloat(chickenRef.current.style.width) + parseFloat(chickenRef.current.style.left) && chickenRef.current.style.display !== "none")
        ){
          ref.current.src = EliChicken
          clearInterval(intervalRef.current)
          holdingRef.current = true
          chickenRef.current.style.display = "none"
          chickenCaught.push(1)
          activityFeedRef.current.style.display = `block`
          activityFeedRef.current.innerText = `Eli caught ${chickenRef.current.id}!`
          kelseyRef.current.src = KelseyCelebrating
          setTimeout(()=>{
            activityFeedRef.current.style.display = `none`
            kelseyRef.current.src = KelseyImage
          }, 3000)

        } else if((parseFloat(ref.current.style.top) < parseFloat(chickenThreeRef.current.style.top) + parseFloat(chickenThreeRef.current.style.height)) && (parseFloat(ref.current.style.top) + parseFloat(ref.current.style.height) > parseFloat(chickenThreeRef.current.style.top)) && (parseFloat(ref.current.style.left) + parseFloat(ref.current.style.width) > parseFloat(chickenThreeRef.current.style.left)) && (parseFloat(ref.current.style.left) < parseFloat(chickenThreeRef.current.style.width) + parseFloat(chickenThreeRef.current.style.left) && chickenThreeRef.current.style.display !== "none")
        ){
          ref.current.src = EliChicken
          clearInterval(intervalThreeRef.current)
          holdingRef.current = true
          activityFeedRef.current.style.display = `block`
          chickenThreeRef.current.style.display = "none"
          chickenCaught.push(3)
          activityFeedRef.current.innerText = `Eli caught ${chickenThreeRef.current.id}!`
          kelseyRef.current.src = KelseyCelebrating
          setTimeout(()=>{
            activityFeedRef.current.style.display = `none`
            kelseyRef.current.src = KelseyImage
          }, 3000)

        } else if((parseFloat(ref.current.style.top) < parseFloat(chickenFourRef.current.style.top) + parseFloat(chickenFourRef.current.style.height)) && (parseFloat(ref.current.style.top) + parseFloat(ref.current.style.height) > parseFloat(chickenFourRef.current.style.top)) && (parseFloat(ref.current.style.left) + parseFloat(ref.current.style.width) > parseFloat(chickenFourRef.current.style.left)) && (parseFloat(ref.current.style.left) < parseFloat(chickenFourRef.current.style.width) + parseFloat(chickenFourRef.current.style.left) && chickenFourRef.current.style.display !== "none")
        ){
          ref.current.src = EliChicken
          clearInterval(intervalFourRef.current)
          holdingRef.current = true
          activityFeedRef.current.style.display = `block`
          chickenFourRef.current.style.display = "none"
          chickenCaught.push(4)
          activityFeedRef.current.innerText = `Eli caught ${chickenFourRef.current.id}!`
          kelseyRef.current.src = KelseyCelebrating
          setTimeout(()=>{
            activityFeedRef.current.style.display = `none`
            kelseyRef.current.src = KelseyImage
          }, 3000)

        } else if((parseFloat(ref.current.style.top) < parseFloat(chickenFiveRef.current.style.top) + parseFloat(chickenFiveRef.current.style.height)) && (parseFloat(ref.current.style.top) + parseFloat(ref.current.style.height) > parseFloat(chickenFiveRef.current.style.top)) && (parseFloat(ref.current.style.left) + parseFloat(ref.current.style.width) > parseFloat(chickenFiveRef.current.style.left)) && (parseFloat(ref.current.style.left) < parseFloat(chickenFiveRef.current.style.width) + parseFloat(chickenFiveRef.current.style.left) && chickenFiveRef.current.style.display !== "none")
        ){
          ref.current.src = EliChicken
          clearInterval(intervalFiveRef.current)
          holdingRef.current = true
          chickenFiveRef.current.style.display = "none"
          chickenCaught.push(5)
          activityFeedRef.current.style.display = `block`
          activityFeedRef.current.innerText = `Eli caught ${chickenFiveRef.current.id}!`
          kelseyRef.current.src = KelseyCelebrating
          setTimeout(()=>{
            activityFeedRef.current.style.display = `none`
            kelseyRef.current.src = KelseyImage
          }, 3000)

        }
      } else {
        if((parseFloat(ref.current.style.top) < parseFloat(coopRef.current.style.top) + parseFloat(coopRef.current.style.height)) && (parseFloat(ref.current.style.top) + parseFloat(ref.current.style.height) > parseFloat(coopRef.current.style.top)) && (parseFloat(ref.current.style.left) + parseFloat(ref.current.style.width) > parseFloat(coopRef.current.style.left)) && (parseFloat(ref.current.style.left) < parseFloat(coopRef.current.style.width) + parseFloat(coopRef.current.style.left))
        ){
          activityFeedRef.current.style.display = `block`
          kelseyRef.current.src = KelseyCelebrating
          setTimeout(()=>{
            activityFeedRef.current.style.display = `none`
            kelseyRef.current.src = KelseyImage
          }, 3000)
          ref.current.src = EliFront
          holdingRef.current = false
          let plural = ""
          if(chickenCaught.length > 1 ){
            plural="s"
          }
          if(chickenCaught.includes(1)){
            activityFeedRef.current.innerText = `${chickenCaught.length} chicken${plural} in the coop!`
            setRestartOne(true)
            restartOneRef.current = true
          }  if (chickenCaught.includes(2)){
            activityFeedRef.current.innerText = `${chickenCaught.length} chicken${plural} in the coop!`
            setRestartTwo(true)
            restartTwoRef.current = true
          }  if (chickenCaught.includes(3)){
            activityFeedRef.current.innerText = `${chickenCaught.length} chicken${plural} in the coop!`
            setRestartThree(true)
            restartThreeRef.current = true
          }  if (chickenCaught.includes(4)){
            activityFeedRef.current.innerText = `${chickenCaught.length} chicken${plural} in the coop!`
            setRestartFour(true)
            restartFourRef.current = true
          }  if (chickenCaught.includes(5)){
            activityFeedRef.current.innerText = `${chickenCaught.length} chicken${plural} in the coop!`
            setRestartFive(true)
            restartFiveRef.current = true
          }
          chickenCountRef.current  = chickenCountRef.current  + 1
          setChickenCount(chickenCountRef.current)
        }
      } 
    }
  };

  const releaseChicken = () => {
    const releaser = [
      {
        name:"Tansy",
        ref: tansyRef
      },
      {
        name:"Fia",
        ref: fiaRef
      },
      {
        name:"Clover",
        ref: cloverRef
      }
    ]
    if (restartOneRef.current !== true && restartTwoRef.current !== true && restartThreeRef.current !== true && restartFourRef.current !== true && restartFiveRef.current !== true) return
    if (restartOneRef.current === true && restartTwoRef.current === true && restartThreeRef.current === true && restartFourRef.current === true && restartFiveRef.current === true) return
      if(restartOneRef.current === true && tansyRef.current.style.top >= "85%" && cloverRef.current.style.top >= "85%" && fiaRef.current.style.top >= "85%"){
        const num = randomIntFromInterval(0, 2) 
        let returnTansy =  ""
        let check = setInterval(()=>{
          if(releaser[num].ref.current.style.top === "70%"){
            clearInterval(check)
            clearInterval(returnTansy)
            restartOneRef.current = false
            setRestartOne(false)
            chickenCaught.splice(chickenCaught.indexOf(1), 1);
            activityFeedRef2.current.style.display = `block`
            activityFeedRef2.current.innerText = `${releaser[num].name} released ${chickenNames[0]}!`
            setTimeout(()=>{
              activityFeedRef2.current.style.display = `none`
            }, 3000)
            returnTansy = setInterval(()=>{
              if(releaser[num].ref.current.style.top === "85%"){
                clearInterval(returnTansy)
                clearInterval(check)
              }
              releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) + 1 + "%"
            }, 100)
          }
          releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) - 1 + "%"
        }, 100)
      } else if (restartTwoRef.current === true && tansyRef.current.style.top >= "85%" && cloverRef.current.style.top >= "85%" && fiaRef.current.style.top >= "85%"){
        const num = randomIntFromInterval(0, 2) 
        let returnTansy =  ""
        let check = setInterval(()=>{
          if(releaser[num].ref.current.style.top === "70%"){
            clearInterval(check)
            clearInterval(returnTansy)
            restartTwoRef.current = false
            setRestartTwo(false)
            chickenCaught.splice(chickenCaught.indexOf(2), 1);
            activityFeedRef2.current.style.display = `block`
            activityFeedRef2.current.innerText = `${releaser[num].name} released ${chickenNames[1]}!`
            setTimeout(()=>{
              activityFeedRef2.current.style.display = `none`
            }, 3000)
            returnTansy = setInterval(()=>{
              if(releaser[num].ref.current.style.top === "85%"){
                clearInterval(returnTansy)
                clearInterval(check)
              }
              releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) + 1 + "%"
            }, 100)
          }
          releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) - 1 + "%"
        }, 100)
      
      } else if (restartThreeRef.current === true && tansyRef.current.style.top >= "85%" && cloverRef.current.style.top >= "85%" && fiaRef.current.style.top >= "85%"){
        const num = randomIntFromInterval(0, 2) 
        let returnTansy =  ""
        let check = setInterval(()=>{
          if(releaser[num].ref.current.style.top === "70%"){
            clearInterval(check)
            clearInterval(returnTansy)
            restartThreeRef.current = false
            setRestartThree(false)
            chickenCaught.splice(chickenCaught.indexOf(3), 1);
            activityFeedRef2.current.style.display = `block`
            activityFeedRef2.current.innerText = `${releaser[num].name} released ${chickenNames[2]}!`
            setTimeout(()=>{
              activityFeedRef2.current.style.display = `none`
            }, 3000)
            returnTansy = setInterval(()=>{
              if(releaser[num].ref.current.style.top === "85%"){
                clearInterval(returnTansy)
                clearInterval(check)
              }
              releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) + 1 + "%"
            }, 100)
          }
          releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) - 1 + "%"
        }, 100)
      
      } else if (restartFourRef.current === true && tansyRef.current.style.top >= "85%" && cloverRef.current.style.top >= "85%" && fiaRef.current.style.top >= "85%"){
        const num = randomIntFromInterval(0, 2) 
        let returnTansy =  ""
        let check = setInterval(()=>{
          if(releaser[num].ref.current.style.top === "70%"){
            clearInterval(check)
            clearInterval(returnTansy)
            restartFourRef.current = false
            setRestartFour(false)
            chickenCaught.splice(chickenCaught.indexOf(4), 1);
            activityFeedRef2.current.style.display = `block`
            activityFeedRef2.current.innerText = `${releaser[num].name} released ${chickenNames[3]}!`
            setTimeout(()=>{
              activityFeedRef2.current.style.display = `none`
            }, 3000)
            returnTansy = setInterval(()=>{
              if(releaser[num].ref.current.style.top === "85%"){
                clearInterval(returnTansy)
                clearInterval(check)
              }
              releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) + 1 + "%"
            }, 100)
          }
          releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) - 1 + "%"
        }, 100)
      } else if (restartFiveRef.current === true && tansyRef.current.style.top >= "85%" && cloverRef.current.style.top >= "85%" && fiaRef.current.style.top >= "85%"){
        const num = randomIntFromInterval(0, 2) 
        let returnTansy =  ""
        let check = setInterval(()=>{
          if(releaser[num].ref.current.style.top === "70%"){
            clearInterval(check)
            clearInterval(returnTansy)
            restartFiveRef.current = false
            setRestartFive(false)
            chickenCaught.splice(chickenCaught.indexOf(5), 1);
            activityFeedRef2.current.style.display = `block`
            activityFeedRef2.current.innerText = `${releaser[num].name} released ${chickenNames[4]}!`
            setTimeout(()=>{
              activityFeedRef2.current.style.display = `none`
            }, 3000)
            returnTansy = setInterval(()=>{
              if(releaser[num].ref.current.style.top === "85%"){
                clearInterval(returnTansy)
                clearInterval(check)
              }
              releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) + 1 + "%"
            }, 100)
          }
          releaser[num].ref.current.style.top = parseFloat(releaser[num].ref.current.style.top) - 1 + "%"
        }, 100)
      }
  }

  const movement = (e) => {
    characterControls(e, character, characterRef, holdingRef);
  };

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    const remove = (e) => {
      if (e.key === recentKey) {
        clearInterval(interval);
      }
    };
    setInterval(() => {
      const randomInt = randomIntFromInterval(0,9)
        if(randomInt > 5){
          releaseChicken()
        }
    }, 1700);
    window.addEventListener("keydown", movement);
    window.addEventListener("keyup", remove);
    return () => {
      window.removeEventListener("keydown", movement);
      // window.removeEventListener("keyup", remove);
    };
  }, []);

  return (
    <img
      ref={ref}
      style={characterStyle}
      src={EliFront}
      alt={"character model"}
    />
  );
});

export default Character;
