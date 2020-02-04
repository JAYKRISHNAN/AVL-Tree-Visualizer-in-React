import React, { Component } from 'react';
import './BinarySearchTreeNode.css';

class BinarySearchTreeNode extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="node">{this.props.node.value}</div>
        {this.props.node.left && !this.props.node.right &&
        <React.Fragment>
          <br />
          <BinarySearchTreeNode node={this.props.node.left}/>
        </React.Fragment>
        }

        {this.props.node.right && !this.props.node.left &&
        <React.Fragment>
          <br />
          <BinarySearchTreeNode node={this.props.node.right}/>
        </React.Fragment>
        }

        {this.props.node.right && this.props.node.left &&
        <React.Fragment>
          <br />
          <BinarySearchTreeNode node={this.props.node.left}/>
          <BinarySearchTreeNode node={this.props.node.right}/>
        </React.Fragment>
        }
      </React.Fragment>
    )
  }
}
export default BinarySearchTreeNode;