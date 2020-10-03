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

  const onDeletePost = async (postID) => {
    console.log("deleting...");
    // updating database
    await db.collection("posts").doc(postID).delete();
    // updating our local posts
    setPosts((prevState) => prevState.filter((post) => post.id !== postID));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      {posts.map((post) => (
        <Post
          onDeletePost={onDeletePost}
          id={post.id}
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
