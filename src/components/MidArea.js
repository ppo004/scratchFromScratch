// src/components/ScriptArea.js
import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addBlock, removeBlock } from '../actions';
import Block from './Block';
const MidArea = () => {
  const dispatch = useDispatch();
  const blocks = useSelector((state) => state.blocks);

  const [{ isOverCurrent, canDrop }, drop] = useDrop(() => ({
    accept: 'BLOCK',
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (!didDrop && item.source === 'palette') {
       
        console.log("Item",item)
        dispatch(addBlock(item));
      }
    },
    collect: (monitor) => ({
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  }), [blocks]);

  return (
    <div ref={drop} style={{ border: '1px solid black', minHeight: '400px' }}>
      {blocks.map((block) => {
        console.log("Block",block);
        return (
          <Block key={block.id} id={block.id} type={block.type} initialValue={block.value} source="scriptArea" />
        );
      })}
    </div>
  );
};

export default MidArea;
