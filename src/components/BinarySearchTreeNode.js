import React, { Component } from 'react';
import './BinarySearchTreeNode.css';

class BinarySearchTreeNode extends Component {
  render() {
    return (
    <div className="node">{this.props.value}</div>
    )
  }
}
export default BinarySearchTreeNode;