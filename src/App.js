import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import WelcomeHeader from "./components/WelcomeHeader/WelcomeHeader";
import AddItem from "./components/AddItem/AddItem";
import ItemList from "./components/ItemList/ItemList";

class App extends React.Component {
  constructor() {
    super();
    this.state = { itemList: [] };

    this.addTodoItem = this.addTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.completeTodoItem = this.completeTodoItem.bind(this);
  }

  render() {
    return (
      <>
        <WelcomeHeader />
        <Container className="mt-4 ">
          <Row className="justify-content-md-center">
            <Col>
              <AddItem addTodoItem={this.addTodoItem} />
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-4">
            <Col>
              <ItemList
                itemList={this.state.itemList}
                deleteTodoItem={this.deleteTodoItem}
                completeTodoItem={this.completeTodoItem}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  addTodoItem(newItem) {
    this.setState({ itemList: [newItem, ...this.state.itemList] });
  }

  deleteTodoItem(deleteItemId) {
    this.setState({
      itemList: this.state.itemList.filter((item) => item._id !== deleteItemId),
    });
  }

  completeTodoItem(completedItemId) {
    console.log(`Invoked for ID: ${completedItemId}`);
    this.setState({
      itemList: this.state.itemList.map((item) =>
        item._id === completedItemId
          ? { ...item, completed: !item.completed }
          : item
      ),
    });
  }
}

export default App;
