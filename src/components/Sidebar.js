import React from "react";
import Block from "./Block";

export default function Sidebar() {
  return (
    <div>
        <Block type="MOVE" initialValue="10" source="palette">Move</Block>
        <Block type="TURN" initialValue="10" source="palette">Turn</Block>
        <Block type="Look" initialValue="10" source="palette">Look</Block>
    </div>
  );
}
