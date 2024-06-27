// src/reducers/index.js
import { ADD_BLOCK, REMOVE_BLOCK, UPDATE_BLOCK_VALUE } from '../actions';

const initialState = {
  blocks: [],
};

const rootReducer = (state = initialState, action) => {
  console.log("Action",action.type,action.payload);
  switch (action.type) {
    case ADD_BLOCK:
      return {
        ...state,
        blocks: [...state.blocks, action.payload],
      };
    case REMOVE_BLOCK:
      return {
        ...state,
        blocks: state.blocks.filter((block) => block.id !== action.payload),
      };
      case UPDATE_BLOCK_VALUE:
      return {
        ...state,
        blocks: state.blocks.map((block) =>
          block.id === action.payload.id
            ? { ...block, value: action.payload.value }
            : block
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
