import React from "react";
import './BinarySearchTreeLevel.css';
import BinarySearchTreeNode from "./BinarySearchTreeNode";

const BinarySearchTreeLevel = props => {
  return (
    <div>
      {props.values &&
        props.values.map((node, key) => (
          <BinarySearchTreeNode
            key={`${props.level}_${key}`}
            value={node.value}
            level={props.level}
          />
        ))}
    </div>
  );
};

export default BinarySearchTreeLevel;