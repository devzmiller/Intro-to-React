import React, { Component } from 'react';
import Annie from './Annie_Sniffs.gif';
import List from './List.js';
import ListForm from './List_Form.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleAddItem(listText) {
    const newList = this.state.list.slice()
    newList.push(listText)
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Annie} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List items={this.state.list}/>
        <ListForm addItem={this.handleAddItem}/>
      </div>
    );
  }
}

export default App;
