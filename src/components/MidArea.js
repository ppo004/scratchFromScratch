import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addBlock,turn, move, moveBlock } from '../actions';
import Block from './Block';
const MidArea = () => {
  const dispatch = useDispatch();
  const blocks = useSelector((state) => state.blocks);
  const moveBlockHandler = (dragIndex, hoverIndex) => {
    dispatch(moveBlock(dragIndex, hoverIndex));
  };
  const executeBlocks = () => {
    blocks.blocks.forEach((block) => {
      console.log("Inside block",block);
      switch (block.type) {
        case 'MOVE':
          dispatch(move(block.value));
          break;
        case 'TURN':
          dispatch(turn(block.value));
          break;
        default:
          break;
      }
    });
  };
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
    <div>
      <button onClick={executeBlocks}>Execute</button>
      <div ref={drop} style={{ border: '1px solid black', minHeight: '400px' }}>
      {blocks.blocks.map((block,index) => {
        console.log("Block",block);
        return (
          <Block key={block.id} id={block.id} type={block.type} initialValue={block.value} index={index}
          moveBlock={moveBlockHandler} source="scriptArea" />
        );
      })}
    </div>
    </div>
  );
};

export default MidArea;
