import React, { Component } from 'react';
import './List.css';

class Item extends Component {
  render() {
    return (
      <li className="Item">
        {this.props.text}
      </li>
    );
  }
}

export default Item;
