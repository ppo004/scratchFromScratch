// src/actions/index.js
export const ADD_BLOCK = 'ADD_BLOCK';
export const REMOVE_BLOCK = 'REMOVE_BLOCK';
export const UPDATE_BLOCK_VALUE = 'UPDATE_BLOCK_VALUE';

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
