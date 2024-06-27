// src/reducers/index.js
import {
  ADD_BLOCK,
  REMOVE_BLOCK,
  UPDATE_BLOCK_VALUE,
  MOVE_BLOCK,
} from "../actions";

const initialState = {
  blocks: [],
};

const blocksReducer = (state = initialState, action) => {
  console.log("Action", action.type, action.payload);
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
    case MOVE_BLOCK:
      const { dragIndex, hoverIndex } = action.payload;
      const blocks = [...state.blocks];
      const [draggedBlock] = blocks.splice(dragIndex, 1);
      blocks.splice(hoverIndex, 0, draggedBlock);
      return {
        ...state,
        blocks,
      };
    default:
      return state;
  }
};

export default blocksReducer;
