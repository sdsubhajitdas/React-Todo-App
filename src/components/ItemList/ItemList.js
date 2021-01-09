import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SingleItem from "../SingleItem/SingleItem";
import { AuthContext } from "../../context/AuthContextProvider";
import { db } from "../../firebase/firebase";

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: [],
    };
  }
  render() {
    return (
      <ListGroup>
        {this.state.itemList.map((item) => (
          <SingleItem key={item.id} item={item} />
        ))}
      </ListGroup>
    );
  }

  componentDidMount() {
    // console.debug("ItemList mounted", this.state.itemList);

    this.observer = db
      .collection(this.context.uid)
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (docSnapshot) => {
          let updatedList = [];
          docSnapshot.docs.forEach((item) =>
            updatedList.push({ id: item.id, ...item.data() })
          );
          this.setState({ itemList: updatedList });
        },
        (err) => {
          console.err(`Encountered error: ${err}`);
        }
      );
  }

  componentWillUnmount() {
    this.observer();
  }
}

ItemList.contextType = AuthContext;
export default ItemList;
