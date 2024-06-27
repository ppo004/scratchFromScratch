// // src/reducers/spriteReducer.js
// const initialState = {
//     x: 0,
//     y: 0,
//     direction: 0, // in degrees
//   };
  
//   const spriteReducer = (state = initialState, action) => {
//     console.log(state,action.payload);
//     switch (action.type) {
//       case 'MOVE_SPRITE':
//         const angle = (state.direction * Math.PI) / 180;
//         return {
//           ...state,
//           x: state.x + action.payload * Math.cos(angle),
//           y: state.y + action.payload * Math.sin(angle),
//         };
//       case 'TURN_SPRITE':
//         return {
//           ...state,
//           direction: state.direction + action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default spriteReducer;
  
// spriteReducer.js
import { MOVE_FORWARD, TURN_RIGHT, TURN_LEFT } from '../actions/actionTypes';

const initialState = {
  x: 0,
  y: 0,
  direction: 0, // Assuming 0 is facing right, 90 is down, 180 is left, 270 is up
};

const spriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_FORWARD:
      const radians = (Math.PI / 180) * state.direction;
      return {
        ...state,
        x: state.x + action.payload * Math.cos(radians),
        y: state.y + action.payload * Math.sin(radians),
      };
    case TURN_RIGHT:
      return {
        ...state,
        direction: (state.direction + action.payload) % 360,
      };
    case TURN_LEFT:
      return {
        ...state,
        direction: (state.direction - action.payload + 360) % 360,
      };
    default:
      return state;
  }
};

export default spriteReducer;
