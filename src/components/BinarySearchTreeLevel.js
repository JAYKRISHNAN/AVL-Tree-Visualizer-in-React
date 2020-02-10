import React from "react";
import './BinarySearchTreeLevel.css';
import BinarySearchTreeNode from "./BinarySearchTreeNode";

const BinarySearchTreeLevel = props => {
  return (
    <div>
      {props.nodesInLevel &&
        props.nodesInLevel.map((node, index) => (
          <BinarySearchTreeNode
            key={`${props.level}_${index}`}
            value={node.value}
            level={props.level}
          />
        ))}
    </div>
  );
};

export default BinarySearchTreeLevel;