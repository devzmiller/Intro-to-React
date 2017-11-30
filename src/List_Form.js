import React, { Component } from 'react';
import './List.css';

class ListForm extends Component {

  constructor() {
    super()
    this.handleFormUpdate = this.handleFormUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      formVal: ""
    }
  }

  handleFormUpdate(e) {
    this.setState({formVal: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state.formVal)
    this.setState({formVal: ""})
    document.getElementById("add-form").reset();
  }

  render() {
    return (
      <div className="List-Form">
        <form id="add-form" onSubmit={this.handleSubmit}>
          <label>Add to the List:</label>
          <input onChange={this.handleFormUpdate} type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ListForm;
