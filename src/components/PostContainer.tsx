import React from "react";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(7);
  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {error && <h1>An error occurred while loading </h1>}
      <ul>
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostContainer;
