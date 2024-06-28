import { MOVE, TURN } from "../actions";

const initialState = {
  x: 0,
  y: 0,
  direction: 0
};

const spriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE:
      const radians = (Math.PI / 180) * state.direction;
      return {
        ...state,
        x: state.x + action.payload * Math.cos(radians),
        y: state.y + action.payload * Math.sin(radians),
      };
    case TURN:
      return {
        ...state,
        direction: (state.direction + action.payload) % 360,
      };
    default:
      return state;
  }
};

export default spriteReducer;
