import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, ListGroup } from "react-bootstrap";
// components
import PostPage from "./Pages/PostPage/PostPage";

const App = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchData = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await fetchData.data;
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <Container className="py-5">
      <h1>Posts</h1>
      <ListGroup>
        {post && post.map(item => <PostPage key={item.id} item={item} />)}
      </ListGroup>
    </Container>
  );
};

export default App;
