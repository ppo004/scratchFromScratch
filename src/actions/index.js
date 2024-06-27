// src/actions/index.js
import { MOVE_FORWARD, TURN_RIGHT, TURN_LEFT } from './actionTypes';

export const ADD_BLOCK = 'ADD_BLOCK';
export const REMOVE_BLOCK = 'REMOVE_BLOCK';
export const UPDATE_BLOCK_VALUE = 'UPDATE_BLOCK_VALUE';
export const MOVE_BLOCK = 'MOVE_BLOCK';

export const addBlock = (block) => ({
  type: ADD_BLOCK,
  payload: { id: block.id, type: block.type, value: block.initialValue, source:block.source },
});

export const removeBlock = (id) => ({
  type: REMOVE_BLOCK,
  payload: id,
});

export const updateBlockValue = (id, value) => ({
  type: UPDATE_BLOCK_VALUE,
  payload: { id, value },
});

export const moveBlock = (dragIndex, hoverIndex) => ({
  type: MOVE_BLOCK,
  payload: { dragIndex, hoverIndex },
});

export const executeBlocks = () => {
  return (dispatch, getState) => {
    const blocks = getState().blocks;
    console.log("while handelling",blocks);
    blocks.blocks.forEach((block) => {
      switch (block.type) {
        case 'Move':
          dispatch({ type: 'MOVE_SPRITE', payload: parseInt(block.value, 10) });
          break;
        case 'Turn':
          dispatch({ type: 'TURN_SPRITE', payload: parseInt(block.value, 10) });
          break;
        default:
          break;
      }
    });
  };
};

// actions.js

export const moveForward = (steps) => ({
  type: MOVE_FORWARD,
  payload: steps,
});

export const turnRight = (degrees) => ({
  type: TURN_RIGHT,
  payload: degrees,
});

export const turnLeft = (degrees) => ({
  type: TURN_LEFT,
  payload: degrees,
});
