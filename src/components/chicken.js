import React, { useContext, useEffect } from "react";
import { EnemyContext } from "../contexts/enemyContext";
import ChickenImage from "../images/chicken.png";

const Chicken = React.forwardRef(({intervalRef, num, restart, setRestart, color, name}, ref) => {
  const enemy = useContext(EnemyContext);

  const chickenStyle = {
    position: "absolute",
    left: enemy.enemyAttributes[num].left,
    top: enemy.enemyAttributes[num].top,
    height: "7%",
    width: "4%",
    zIndex: 2,
    // backgroundColor: color
  }

  const nameStyle = {
    position: "absolute",
    left: parseFloat(enemy.enemyAttributes[num].left) + 0 + "%",
    top: parseFloat(enemy.enemyAttributes[num].top) - 3 + "%",
    height: "5.33%",
    width: "3%",
    zIndex: 2,
    fontSize: "6px"
    // backgroundColor: color
  };

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const startEnemies = () => {
    const chickenOneTopDestination = randomIntFromInterval(35, 90)
    const chickenOneLeftDestination = randomIntFromInterval(5, 80)
    const direction = randomIntFromInterval(0, 1)
    let interval
    if(direction === 0 && parseFloat(ref.current.style.left) > 50) {
      interval = setInterval(()=>{
        if(parseFloat(ref.current.style.left) <= chickenOneLeftDestination){
          clearInterval(interval)
          startEnemies()
        }
        enemy.dispatch({type:'MOVE_LEFT', counter:num, speed:1})
      },50)
      intervalRef.current = interval
    } else if (direction === 0 && parseFloat(ref.current.style.left) <= 50) {
      interval = setInterval(()=>{
        if(parseFloat(ref.current.style.left) >= chickenOneLeftDestination){
          clearInterval(interval)
          startEnemies()
        }
        enemy.dispatch({type:'MOVE_RIGHT', counter:num, speed:1})
      },50)
      intervalRef.current = interval
    } else if (direction === 1 && parseFloat(ref.current.style.top) <= 50) {
      interval = setInterval(()=>{
        if(parseFloat(ref.current.style.top) >= chickenOneTopDestination){
          clearInterval(interval)
          startEnemies()
        }
        enemy.dispatch({type:'MOVE_BOTTOM', counter:num, speed:1})
      },50)
      intervalRef.current = interval
    } else if (direction === 1 && parseFloat(ref.current.style.top) >= 50) {
      interval = setInterval(()=>{
        if(parseFloat(ref.current.style.top) <= chickenOneTopDestination){
          clearInterval(interval)
          startEnemies()
        }
        enemy.dispatch({type:'MOVE_TOP', counter:num, speed:1})
      },50)
      intervalRef.current = interval
    } 
  }

  useEffect(()=>{
    if(restart.current === false || restart.current === undefined){
      startEnemies()
      ref.current.style.display = "block"

      setRestart(false)
    }
  },[restart.current])


  return (
    <>
      <img
        id={name}
        ref={ref}
        style={chickenStyle}
        src={ChickenImage}
        alt={"character model"}
      ></img>
      {/* <div style={nameStyle}>{name}</div> */}
    </>
  );
});

export default Chicken;
