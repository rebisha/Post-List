import React from "react";
import { ListGroup } from "react-bootstrap";

import "./listItem.scss";

const ListItem = ({ handleShow, title }) => {
  return (
    <ListGroup.Item className="listItem-item" onClick={handleShow}>
      {title}
    </ListGroup.Item>
  );
};

export default ListItem;
