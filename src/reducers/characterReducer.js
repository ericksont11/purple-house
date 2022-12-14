export const characterReducer = (state, action) => {
    switch (action.type) {
      case "MOVE_LEFT":
        if (parseFloat(state.left) === 0) return state;
        return {
          ...state,
          left: parseFloat(state.left) - state.speed + "%",
        };
      case "MOVE_RIGHT":
        if (parseFloat(state.left) === 90) return state;
        return {
          ...state,
          left: parseFloat(state.left) + state.speed + "%",
        };
      case "MOVE_UP":
        if (parseFloat(state.top) === 0) return state;
        if(action.ref){
          if(parseFloat(state.top) < 60) {action.ref.current.style.zIndex = 200}
        }
        return {
          ...state,
          top: parseFloat(state.top) - state.speed + "%",
        };
      case "MOVE_DOWN":
        if (parseFloat(state.top) === 83) return state;
        if(action.ref){
          if(parseFloat(state.top) >= 60){action.ref.current.style.zIndex = 0}
        }
        return {
          ...state,
          top: parseFloat(state.top) + state.speed + "%",
        };
      case "SPEED_UP":
        return {
          ...state,
          speed: 1,
        };
      case "RESET_SPEED":
        return {
          ...state,
          speed: 0.5
        };
      case "RESET":
        return {
          ...state,
          top: "85%",
          left: "3%",
        };
      default:
        return state;
    }
  };
  