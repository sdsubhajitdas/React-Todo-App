import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./SingleItem.css";
import { AuthContext } from "../../context/AuthContextProvider";
import { db } from "../../firebase/firebase";

class SingleItem extends React.Component {
  constructor(props) {
    super(props);

    this.onTrashButtonClick = this.onTrashButtonClick.bind(this);
    this.onCheckButtonClick = this.onCheckButtonClick.bind(this);
  }

  render() {
    return (
      <ListGroup.Item
        variant={this.props.item.completed ? "success" : ""}
        className={
          "pt-1 pb-1 " + (this.props.item.completed ? "done-item" : "")
        }
      >
        {this.props.item.value}
        <ButtonGroup size="sm" className="float-right">
          <Button variant="success" onClick={this.onCheckButtonClick}>
            <i className="fas fa-check" />
          </Button>
          <Button variant="danger" onClick={this.onTrashButtonClick}>
            <i className="fas fa-trash" />
          </Button>
        </ButtonGroup>
      </ListGroup.Item>
    );
  }

  async onTrashButtonClick() {
    await db.collection(this.context.uid).doc(this.props.item.id).delete();
  }

  async onCheckButtonClick() {
    await db
      .collection(this.context.uid)
      .doc(this.props.item.id)
      .update({ completed: !this.props.item.completed });
  }
}

SingleItem.contextType = AuthContext;
export default SingleItem;
