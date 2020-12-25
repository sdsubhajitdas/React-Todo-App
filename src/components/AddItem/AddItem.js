import React from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemValue: "" };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
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
              onChange={this.onInputChange}
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

  onFormSubmit(event) {
    event.preventDefault();

    if (this.state.itemValue.trim() !== "") {
      this.props.addTodoItem({
        value: this.state.itemValue.trim(),
        completed: false,
        _id: parseInt(Math.random() * 100000),
      });

      this.setState({ itemValue: "" });
    }
  }

  onInputChange(event) {
    this.setState({ itemValue: this.convertToTitleCase(event.target.value) });
  }

  convertToTitleCase(inputString) {
    return inputString
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (txt) => txt.toUpperCase());
  }
}

export default AddItem;
