// src/components/Block.js
import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { updateBlockValue } from '../actions';

const Block = ({ id, type, initialValue, index, moveBlock, source }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue);
  console.log(moveBlock);
  const [, drag] = useDrag(() => ({
    type: 'BLOCK',
    item: { id, index, type, initialValue, source },
  }));

  const [, drop] = useDrop(() => ({
    accept: 'BLOCK',
    hover: (item) => {
      if (item.index !== index) {
        moveBlock(item.index, index);
        item.index = index;
      }
    },
  }));

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(updateBlockValue(id, e.target.value));
  };

  return (
    <div ref={(node) => drag(drop(node))} style={{ padding: '10px', border: '1px solid black', margin: '5px 0' }}>
      {type}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ marginLeft: '10px' }}
      />
    </div>
  );
};

export default Block;
