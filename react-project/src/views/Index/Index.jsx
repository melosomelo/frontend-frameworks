import React, { useState, useEffect } from "react";

// eslint-disable-next-line import/extensions
import Loader from "../../components/UI/Loader/Loader.jsx";
import Post from "../../components/Post/Post";

import { db } from "../../firebase";
import { Wrapper } from "./styles";

function Index() {
  // loading state that renders the loader component
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      // consulting the database
      const querySnapshot = await db.collection("posts").get();
      const updatedPosts = [];
      querySnapshot.forEach((doc) => {
        updatedPosts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(updatedPosts); // setting the data to be mapped to jsx elements
      setLoading(false); // set loading to false so that the loader disappears
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          text={post.text}
          date={new Date(post.time.seconds * 1000)}
        />
      ))}
    </Wrapper>
  );
}

export default Index;
