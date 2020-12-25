import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import "./SingleItem.css";

class SingleItem extends React.Component {
  constructor(props) {
    super(props);

    this.onTrashButtonClick = this.onTrashButtonClick.bind(this);
    this.onCheckButtonClick = this.onCheckButtonClick.bind(this);
  }

  render() {
    return (
      <ListGroup.Item
        variant={this.props.completed ? "success" : ""}
        className={"pt-1 pb-1 " + (this.props.completed ? "done-item" : "")}
      >
        {this.props.value}
        <ButtonGroup size="sm" className="float-right">
          <Button variant="success" onClick={this.onCheckButtonClick}>
            <i class="fas fa-check" />
          </Button>
          <Button variant="danger" onClick={this.onTrashButtonClick}>
            <i class="fas fa-trash" />
          </Button>
        </ButtonGroup>
      </ListGroup.Item>
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
