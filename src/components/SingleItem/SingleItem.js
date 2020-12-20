import React from "react";

import "./SingleItem.css";

class SingleItem extends React.Component {
  constructor(props) {
    super(props);

    this.onTrashButtonClick = this.onTrashButtonClick.bind(this);
    this.onCheckButtonClick = this.onCheckButtonClick.bind(this);
  }

  render() {
    return (
      <div>
        <li className={this.props.completed ? "complete-item" : ""}>
          {this.props.value}
        </li>
        <button onClick={this.onCheckButtonClick}>
          <i className="fas fa-check"></i>
        </button>
        <button onClick={this.onTrashButtonClick}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }

  onTrashButtonClick() {
    this.props.deleteTodoItem(this.props.id);
  }

  onCheckButtonClick() {
    console.log(`Completed this ${this.props.id}`);
    this.props.completeTodoItem(this.props.id);
  }
}

export default SingleItem;
