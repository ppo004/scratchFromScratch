import { MOVE_FORWARD, TURN_RIGHT, TURN_LEFT } from "../actions";

const initialState = {
  x: 0,
  y: 0,
  direction: 0
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
