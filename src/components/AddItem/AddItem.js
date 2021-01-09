import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../context/AuthContextProvider";
import { db } from "../../firebase/firebase";
import { FieldValue } from "../../firebase/dataTypes";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemValue: "" };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.convertToTitleCase = this.convertToTitleCase.bind(this);
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Row>
          <Col>
            <Form.Control
              type="text"
              value={this.state.itemValue}
              placeholder="Don't forget to buy some eggs for breakfast. 🥚​🥚​​😋​"
              onChange={(e) =>
                this.setState({
                  itemValue: this.convertToTitleCase(e.target.value),
                })
              }
            />
          </Col>
          <Col md="3">
            <Button block variant="primary" type="submit">
              Add Item
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }

  async onFormSubmit(event) {
    event.preventDefault();

    if (this.state.itemValue.trim() !== "") {
      await db.collection(this.context.uid).doc().set({
        value: this.state.itemValue.trim(),
        completed: false,
        timestamp: FieldValue.serverTimestamp(),
      });
      this.setState({ itemValue: "" });
    }
  }

  convertToTitleCase(inputString) {
    return inputString
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (txt) => txt.toUpperCase());
  }
}

AddItem.contextType = AuthContext;
export default AddItem;
