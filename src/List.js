import React, { Component } from 'react';
import Item from './Item'
import './List.css';

class List extends Component {
  createList() {
    if (this.props.items.length > 0) {
      return this.props.items.map((item, i) => <Item text={item} key={i} />)
    }
  }
  render() {
    return (
      <div className="List">
        My List:
        <ul>
          {this.createList()}
        </ul>
      </div>
    );
  }
}

export default List;
