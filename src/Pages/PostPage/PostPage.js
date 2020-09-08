import React, { Fragment, useState } from "react";
// components
import ListItem from "../../Component/ListItem/ListItem";
import ModalDialog from "../../Component/ModalDialog/ModalDialog";

import "./postPage.scss";

const PostPage = ({ item }) => {
  const [show, setShow] = useState(false);
  const { body, title } = item;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Fragment>
      <ListItem title={title} handleShow={handleShow} />
      <ModalDialog
        show={show}
        handleClose={handleClose}
        title={title}
        body={body}
      />
    </Fragment>
  );
};

export default PostPage;
