export const enemyReducer = (state, action) => {
    let placeholder

    switch (action.type) {

        case 'START':
            return [
                {
                    ...state[0],
                    movement: 'start',
                },
                ...state.slice(1)
            ]
        case 'MOVE_LEFT':
            if (action.counter === 0) {
                placeholder = [
                    {
                        ...state[0,action.counter],
                        left: parseFloat(state[action.counter].left) - action.speed + '%',
                    },
                    ...state.slice(action.counter+1)
                ]
            } else {
                placeholder = [
                    ...state.slice(0,action.counter),
                    {
                        ...state[action.counter],
                        left: parseFloat(state[action.counter].left) - action.speed + '%',
                    },
                    ...state.slice(action.counter+1)
                ]
            }
            return placeholder
        case 'MOVE_RIGHT':
            if (action.counter === 0) {
                    placeholder = [
                        {
                            ...state[0,action.counter],
                            left: parseFloat(state[action.counter].left) + action.speed + '%',
                        },
                        ...state.slice(action.counter+1)
                    ]
            } else {
                placeholder = [
                    ...state.slice(0,action.counter),
                    {
                        ...state[action.counter],
                        left: parseFloat(state[action.counter].left) + action.speed + '%',
                    },
                    ...state.slice(action.counter+1)
                ]
            }
            return placeholder
        case 'MOVE_TOP':
            if (action.counter === 0) {
                    placeholder = [
                        {
                            ...state[0,action.counter],
                            top: parseFloat(state[action.counter].top) - action.speed + '%',
                        },
                        ...state.slice(action.counter+1)
                    ]
            } else {
                placeholder = [
                    ...state.slice(0,action.counter),
                    {
                        ...state[action.counter],
                        top: parseFloat(state[action.counter].top) - action.speed + '%',
                    },
                    ...state.slice(action.counter+1)
                ]
            }
                return placeholder
        case 'MOVE_BOTTOM':
            if (action.counter === 0) {
                    placeholder = [
                        {
                            ...state[0,action.counter],
                            top: parseFloat(state[action.counter].top) + action.speed + '%',
                        },
                        ...state.slice(action.counter+1)
                    ]
            } else {
                placeholder = [
                    ...state.slice(0,action.counter),
                    {
                        ...state[action.counter],
                        top: parseFloat(state[action.counter].top) + action.speed + '%',
                    },
                    ...state.slice(action.counter+1)
                ]
            }
                return placeholder
        case 'RESET':
            return  [
                {
                    left: '30%',
                    top: '93%',
                    level: 0,
                    height: '6%',
                    width: '4.5%',
                    movement: 'paused'
                  },
                  {
                    left: '50%',
                    top: '93%',
                    height: '6%',
                    width: '4.5%',
                    level: 0
                  },
                  {
                    left: '60%',
                    top: '20.5%',
                    height: '6%',
                    width: '4.5%',
                    level: 4
                  },
                  {
                    left: '10%',
                    top: '20.5%',
                    height: '6%',
                    width: '4.5%',
                    level: 4
                  }
            ]
        default:
            return state
    }

};