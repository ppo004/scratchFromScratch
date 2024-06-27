// src/components/Block.js
import React,{useState} from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { updateBlockValue } from '../actions';

const Block = ({ id = Date.now(), type, initialValue, source }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BLOCK',
    item: { id, type, initialValue, source },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue);
  console.log(value);
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(id,e.target.value)
    dispatch(updateBlockValue(id, e.target.value));
  };
  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
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
