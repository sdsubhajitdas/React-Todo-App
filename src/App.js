import React from "react";

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
      <div>
        <WelcomeHeader />
        <br />
        <AddItem addTodoItem={this.addTodoItem} />
        <br />
        <br />
        <ItemList
          itemList={this.state.itemList}
          deleteTodoItem={this.deleteTodoItem}
          completeTodoItem={this.completeTodoItem}
        />
      </div>
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
