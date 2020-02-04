import React, { Component } from 'react';
import BinarySearchTreeNode from './components/BinaySearchTreeNode.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BinarySearchTree from "./classes/BinarySearchTree";

 class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      insertValue: "",
      deleteValue: "",
      tree: new BinarySearchTree(),
    };
    this.insert = this.insert.bind(this);
    this.delete = this.delete.bind(this);

    this.traversePreOrder = this.traversePreOrder.bind(this);
    this.traverseInOrder = this.traverseInOrder.bind(this);
    this.traversePostOrder = this.traversePostOrder.bind(this);
    this.breadthFirstSearch = this.breadthFirstSearch.bind(this);

    this.onChangeInsertValue = this.onChangeInsertValue.bind(this);
    this.onChangeDeleteValue = this.onChangeDeleteValue.bind(this);
  }

  onChangeInsertValue(event) {
    this.setState({
      insertValue: event.target.value
    });
  }

  onChangeDeleteValue(event) {
    this.setState({
      deleteValue: event.target.value
    });
  }

  insert() {
    this.state.tree.insert(this.state.insertValue);
    this.setState({
      insertValue: ""
    });
  }

  delete(){
    this.state.tree.delete(this.state.deleteValue);
    this.setState({
      deleteValue: ""
    });
  }

  traversePreOrder(){
    let values = [];
    this.state.tree.traversePreOrder(this.state.tree.root, function(node){(values.push(node.value));} );
    alert(values.join(" --> "));
  }

  traversePostOrder(){
    let values = [];
    this.state.tree.traversePostOrder(this.state.tree.root, function(node){(values.push(node.value));} );
    alert(values.join(" --> "));
  }

  traverseInOrder(){
    let values = [];
    this.state.tree.traverseInOrder(this.state.tree.root, function(node){(values.push(node.value));} );
    alert(values.join(" --> "));
  }

  breadthFirstSearch(){
    let values = [];
    this.state.tree.breadthFirstSearch(this.state.tree.root, function(node){(values.push(node.value));} );
    alert(values.join(" --> "));
  }

  render(){
    const hasRootNode = this.state.tree.root;
    return (
      <div id="app">
        <div id="tree">
          { hasRootNode ? (
              <BinarySearchTreeNode node={this.state.tree.root}/>
            ) : (
              <h3> No elements in the tree. Click insert to start! </h3>
            )
          }
        </div>
        <div id="actions">
          <div className="action">
            <input value={this.state.insertValue} onChange={this.onChangeInsertValue}/>
            <button  onClick={this.insert} className="btn btn-default">Insert</button>
          </div>

          <div className="action">
            <input value={this.state.deleteValue} onChange={this.onChangeDeleteValue}/>
            <button onClick={this.delete} className="btn btn-default">Delete</button>
          </div>

          <div className="action">
            <input/>
            <button className="btn btn-default">Search</button>
          </div>

          <div className="action">
            <button onClick={this.traversePreOrder} className="btn btn-default">Traverse Pre Order</button>
          </div>

          <div className="action">
            <button onClick={this.traverseInOrder} className="btn btn-default">Traverse In Order</button>
          </div>

          <div className="action">
            <button onClick={this.traversePostOrder} className="btn btn-default">Traverse Post Order</button>
          </div>

          <div className="action">
            <button onClick={this.breadthFirstSearch} className="btn btn-default">Traverse Breadth First Search</button>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
