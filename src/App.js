import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
// components
import ListItem from "./Component/ListItem/ListItem";

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
      {post && post.map(item => <ListItem key={item.id} item={item} />)}
    </Container>
  );
};

export default App;
