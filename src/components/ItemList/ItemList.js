import React from "react";

import SingleItem from "../SingleItem/SingleItem";

class ItemList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.itemList.map((item) => (
            <SingleItem
              key={item._id}
              id={item._id}
              value={item.value}
              completed={item.completed}
              deleteTodoItem={this.props.deleteTodoItem}
              completeTodoItem={this.props.completeTodoItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
