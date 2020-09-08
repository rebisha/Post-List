import React from "react";
import { ListGroup } from "react-bootstrap";

import "./listItem.scss";

const ListItem = ({ item }) => {
  return (
    <ListGroup className="listItem">
      <ListGroup.Item className="listItem-item">{item.title}</ListGroup.Item>
    </ListGroup>
  );
};

export default ListItem;
