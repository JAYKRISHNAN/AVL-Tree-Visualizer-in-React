import React, { Component } from 'react';
import './BinarySearchTreeNode.css';

class BinarySearchTreeNode extends Component {
  render() {
    return (
      <React.Fragment>
        <li>
          <a href="#" className={this.props.nodeType + (this.props.node.active == true ? " active" : "")}>{this.props.node.value}</a>
          { (this.props.node.left || this.props.node.right) &&
            <ul>
              { this.props.node.left &&
                <BinarySearchTreeNode node={this.props.node.left} nodeType="left"/>
              }
              { this.props.node.right &&
                <BinarySearchTreeNode node={this.props.node.right} nodeType="right"/>
              }
            </ul>
          }
        </li>
      </React.Fragment>
    )
  }
}
export default BinarySearchTreeNode;