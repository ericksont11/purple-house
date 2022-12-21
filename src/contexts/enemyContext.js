import React, { createContext, useReducer } from 'react';
import { enemyReducer } from '../reducers/enemyReducer';
export const EnemyContext = createContext();

const enemies = [
  {
    left: '80%',
    top: '93%',
    level: 0,
    height: '6%',
    width: '4.5%',
    movement: 'paused',
    speed: 1
  },
  {
    left: '75%',
    top: '75%',
    level: 0,
    height: '6%',
    width: '4.5%',
    movement: 'paused',
    speed: 1
  },
  {
    left: '75%',
    top: '75%',
    level: 0,
    height: '6%',
    width: '4.5%',
    movement: 'paused',
    speed: 1
  },
  {
    left: '75%',
    top: '75%',
    level: 0,
    height: '6%',
    width: '4.5%',
    movement: 'paused',
    speed: 1
  },
  {
    left: '75%',
    top: '75%',
    level: 0,
    height: '6%',
    width: '4.5%',
    movement: 'paused',
    speed: 1
  }
]


const EnemyContextProvider = props => {
  const [enemyAttributes, dispatch] = useReducer(enemyReducer, enemies); //useReducer accepts a reducer of type (state,action)=> NewState,and returns the new state passed with a dispatch method
  return (
    <EnemyContext.Provider value={{ enemyAttributes, dispatch }}>
      {props.children}
    </EnemyContext.Provider>
  );
};

export default EnemyContextProvider;