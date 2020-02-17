import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BinarySearchTree from "./classes/BinarySearchTree.js";
import BinarySearchTreeNode from "./components/BinarySearchTreeNode.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insertValue: "",
      deleteValue: "",
      searchValue: "",
      previewContent: "",
      tree: new BinarySearchTree()
    };
    this.insert = this.insert.bind(this);
    this.delete = this.delete.bind(this);
    this.resetActiveStatusOfNodes = this.resetActiveStatusOfNodes.bind(this);
    this.resetPreviewContent = this.resetPreviewContent.bind(this);

    this.traversePreOrder = this.traversePreOrder.bind(this);
    this.traverseInOrder = this.traverseInOrder.bind(this);
    this.traversePostOrder = this.traversePostOrder.bind(this);
    this.breadthFirstSearch = this.breadthFirstSearch.bind(this);
    this.search = this.search.bind(this);
    this.pause = this.pause.bind(this);

    this.onChangeInsertValue = this.onChangeInsertValue.bind(this);
    this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
    this.onChangeDeleteValue = this.onChangeDeleteValue.bind(this);
  }

  pause(milliseconds) {
    var date = new Date();
    while (new Date() - date <= milliseconds) {
      /* Do nothing */
    }
  }

  resetPreviewContent(){
    this.setState({
        previewContent: ""
    })
  }

  resetActiveStatusOfNodes(){
    this.state.tree.traverseInOrder(this.state.tree.root, function(node) {
      node.active = false;
    });
  }

  onChangeInsertValue(event) {
    this.resetActiveStatusOfNodes();
    this.resetPreviewContent();
    this.setState({
      insertValue: parseInt(event.target.value)
    });
  }

  onChangeDeleteValue(event) {
    this.resetActiveStatusOfNodes();
    this.resetPreviewContent();
    this.setState({
      deleteValue: parseInt(event.target.value)
    });
  }

  onChangeSearchValue(event) {
    this.resetActiveStatusOfNodes();
    this.resetPreviewContent();
    this.setState({
      searchValue: parseInt(event.target.value)
    });
  }

  insert() {
    this.resetActiveStatusOfNodes();
    this.resetPreviewContent();
    this.state.tree.insert(this.state.insertValue);
    this.setState({
      insertValue: ""
    });
  }

  delete() {
    this.resetActiveStatusOfNodes();
    this.resetPreviewContent();
    this.state.tree.delete(this.state.deleteValue);
    this.setState({
      deleteValue: ""
    });
  }

  search() {
    this.resetActiveStatusOfNodes();
    this.resetPreviewContent();
    let searchResult = this.state.tree.find(
      this.state.tree.root,
      this.state.searchValue
    );

    if (searchResult) {
      searchResult.active = true;
    } else {
      this.setState({
        previewContent: "Not Found!"
      });
    }

    this.setState({
      searchValue: ""
    });
  }

  traversePreOrder() {
    this.resetActiveStatusOfNodes();
    let values = [];
    this.state.tree.traversePreOrder(this.state.tree.root, function(node) {
      values.push(node.value);
    });
    this.setState({
      previewContent: values.join(" --> ")
    });
  }

  traversePostOrder() {
    this.resetActiveStatusOfNodes();
    let values = [];
    this.state.tree.traversePostOrder(this.state.tree.root, function(node) {
      values.push(node.value);
    });
    this.setState({
      previewContent: values.join(" --> ")
    });
  }

  traverseInOrder() {
    this.resetActiveStatusOfNodes();
    let values = [];
    this.state.tree.traverseInOrder(this.state.tree.root, function(node) {
      values.push(node.value);
    });
    this.setState({
      previewContent: values.join(" --> ")
    });
  }

  breadthFirstSearch() {
    this.resetActiveStatusOfNodes();
    let values = [];
    this.state.tree.breadthFirstSearch(this.state.tree.root, function(node) {
      values.push(node.value);
    });
    this.setState({
      previewContent: values.join(" --> ")
    });
  }

  render() {
    const hasRootNode = this.state.tree.root;
    return (
      <React.Fragment>
        <div id="app">
          <div id="tree" className="tree">
            {hasRootNode ? (
              <ul>
                <BinarySearchTreeNode
                  node={this.state.tree.root}
                  nodeType="root"
                />
              </ul>
            ) : (
              <h5> EMPTY TREE! </h5>
            )}
          </div>

          <div id="basic-actions">
            <div className="action">
              <input
                value={this.state.insertValue}
                onChange={this.onChangeInsertValue}
                type="number"
              />
              <button
                onClick={this.insert}
                className="btn btn-secondary btn-sm"
              >
                ADD
              </button>
            </div>

            <div className="action">
              <input
                value={this.state.deleteValue}
                onChange={this.onChangeDeleteValue}
                type="number"
              />
              <button
                onClick={this.delete}
                className="btn btn-secondary btn-sm"
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>

        <div id="traversal-preview">
          { this.state.previewContent }
        </div>

        <div id="traversal-actions">
          <div className="action">
            <input
              value={this.state.searchValue}
              onChange={this.onChangeSearchValue}
              type="number"
            />
            <button
              onClick={this.search}
              className="btn btn-secondary btn-sm"
            >
              FIND
            </button>
          </div>

          <div className="action">
            <button
              onClick={this.traversePreOrder}
              className="btn btn-secondary btn-sm"
            >
              PRE ORDER
            </button>
          </div>

          <div className="action">
            <button
              onClick={this.traverseInOrder}
              className="btn btn-secondary btn-sm"
            >
              IN ORDER
            </button>
          </div>

          <div className="action">
            <button
              onClick={this.traversePostOrder}
              className="btn btn-secondary btn-sm"
            >
              POST ORDER
            </button>
          </div>

          <div className="action">
            <button
              onClick={this.breadthFirstSearch}
              className="btn btn-secondary btn-sm"
            >
              BFS
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
