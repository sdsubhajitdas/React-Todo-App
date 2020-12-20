import React from "react";

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
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.itemValue}
          onChange={this.onInputChange}
        />
        <input type="submit" value="Add Item" />
      </form>
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
