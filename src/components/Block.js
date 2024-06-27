import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { updateBlockValue } from "../actions";

const Block = ({ id, type, initialValue, index, moveBlock, source }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue);

  const [, drag] = useDrag(() => ({
    type: "BLOCK",
    item: { id, index, type, initialValue, source },
  }));

  const [, drop] = useDrop(() => ({
    accept: "BLOCK",
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
    <div
      ref={(node) => drag(drop(node))}
      className="block-container bg-gray-200 border border-gray-400 p-2 m-2 inline-block"
    >
      <div className="block-type bg-blue-500 text-white font-bold p-1">{type}</div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="block-input ml-2 border-none outline-none"
      />
    </div>
  );
};

export default Block;
