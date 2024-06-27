// src/reducers/index.js
import { combineReducers } from 'redux';
import blocksReducer from './blocksReducer';
import spriteReducer from './spriteReducers';

const rootReducer = combineReducers({
  blocks: blocksReducer,
  sprite: spriteReducer,
});

export default rootReducer;
