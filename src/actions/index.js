export const ADD_BLOCK = 'ADD_BLOCK';
export const REMOVE_BLOCK = 'REMOVE_BLOCK';
export const UPDATE_BLOCK_VALUE = 'UPDATE_BLOCK_VALUE';
export const MOVE_BLOCK = 'MOVE_BLOCK';
export const MOVE = 'MOVE';
export const TURN = 'TURN';
export const TURN_LEFT = 'TURN_LEFT';

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

export const move = (steps) => ({
  type: MOVE,
  payload: steps,
});

export const turn = (degrees) => ({
  type: TURN,
  payload: degrees,
});